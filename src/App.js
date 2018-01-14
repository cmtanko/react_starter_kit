import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import * as routes from './constants/routes';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import UserPage from './components/users/UserPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import ManageUserPage from './components/users/ManageUserPage';
import ManageCountryPage from './components/country/ManageCountryPage';
import { createBrowserHistory } from 'history';
import CountryPage from './components/country/CountryPage';

import * as RxDB from 'rxdb';
import { QueryChangeDetector } from 'rxdb';
import { ToastContainer, toast } from 'react-toastify';
import { schema } from './Schema';
import * as moment from 'moment';

QueryChangeDetector.enable();
QueryChangeDetector.enableDebugging();
RxDB.plugin(require('pouchdb-adapter-idb'));
RxDB.plugin(require('pouchdb-adapter-http'));

const syncURL = 'http://localhost:5984/';
const dbName = 'chatdb';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMessage: '',
      messages: []
    };
    this.subs = [];
    this.addMessage = this.addMessage.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  async createDatabase() {
    // password must have at least 8 characters
    const db = await RxDB.create({
      name: dbName,
      adapter: 'idb',
      password: '123456789'
    });
    console.dir(db);

    // show who's the leader in page's title
    db.waitForLeadership().then(() => {
      document.title = '♛ ' + document.title;
    });

    // create collection
    const messagesCollection = await db.collection({
      name: 'messages',
      schema: schema
    });

    // set up replication
    const replicationState = messagesCollection.sync({
      remote: syncURL + dbName + '/'
    });
    this.subs.push(
      replicationState.change$.subscribe(change => {
        toast('Replication change');
        console.dir(change);
      })
    );
    this.subs.push(
      replicationState.docs$.subscribe(docData => console.dir(docData))
    );
    this.subs.push(
      replicationState.active$.subscribe(active =>
        toast(`Replication active: ${active}`)
      )
    );
    this.subs.push(
      replicationState.complete$.subscribe(completed =>
        toast(`Replication completed: ${completed}`)
      )
    );
    this.subs.push(
      replicationState.error$.subscribe(error => {
        toast('Replication Error');
        console.dir(error);
      })
    );

    return db;
  }

  async componentDidMount() {
    this.db = await this.createDatabase();

    // Subscribe to query to get all messages
    const sub = this.db.messages
      .find()
      .sort({ id: 1 })
      .$.subscribe(messages => {
        if (!messages) return;
        toast('Reloading messages');
        this.setState({ messages: messages });
      });
    this.subs.push(sub);
  }

  componentWillUnmount() {
    // Unsubscribe from all subscriptions
    this.subs.forEach(sub => sub.unsubscribe());
  }
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Header loading={this.props.loading} />

          <div>
            <ToastContainer autoClose={3000} />

            <div className="App-header">
              <h2>Messages</h2>
            </div>

            <div>{this.renderMessages()}</div>

            <div id="add-message-div">
              <h3>Add Message</h3>
              <input
                type="text"
                placeholder="Message"
                value={this.state.newMessage}
                onChange={this.handleMessageChange}
              />
              <button onClick={this.addMessage}>Add message</button>
            </div>
          </div>

          <Grid>
            <Row className="show-grid">
              <div>
                <Switch>
                  <Route path={routes.ROOT} exact component={HomePage} />
                  <Route path={routes.HOME} exact component={HomePage} />

                  <Route path={routes.USERS} exact component={UserPage} />
                  <Route path={routes.USER} exact component={ManageUserPage} />

                  <Route
                    path={routes.COUNTRIES}
                    exact
                    component={CountryPage}
                  />
                  <Route
                    path={routes.COUNTRY}
                    exact
                    component={ManageCountryPage}
                  />
                  <Route
                    path={routes.COUNTRYID}
                    exact
                    component={ManageCountryPage}
                  />
                  <Route path={routes.COURSES} exact component={CoursesPage} />
                  <Route
                    path={routes.COURSE}
                    exact
                    component={ManageCoursePage}
                  />
                  <Route
                    path={routes.COURSEID}
                    exact
                    component={ManageCoursePage}
                  />
                  <Route path="*" component={HomePage} />
                </Switch>
              </div>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }

  renderMessages() {
    return this.state.messages.map(({ id, message }) => {
      const date = moment(id, 'x').fromNow();
      return (
        <div key={id}>
          <p>{date}</p>
          <p>{message}</p>
          <hr />
        </div>
      );
    });
  }

  handleMessageChange(event) {
    this.setState({ newMessage: event.target.value });
  }

  async addMessage() {
    const id = Date.now().toString();
    const newMessage = { id, message: this.state.newMessage };

    await this.db.messages.insert(newMessage);

    this.setState({ newMessage: '' });
  }
}
App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
