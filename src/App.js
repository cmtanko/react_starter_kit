import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import * as routes from './constants/routes';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import UserPage from './components/users/UserPage';
import ManageUserPage from './components/users/ManageUserPage';
import ManageCountryPage from './components/country/ManageCountryPage';
import { createBrowserHistory } from 'history';
import CountryPage from './components/country/CountryPage';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header loading={this.props.loading} />
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
                  <Route path="*" component={HomePage} />
                </Switch>
              </div>
            </Row>
          </Grid>
        </div>
      </Router>
    );
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
