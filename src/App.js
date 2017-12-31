import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as routes from './constants/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header loading={this.props.loading} />
          <Grid>
            <Row className="show-grid">
              <code>
                <div>
                  <Route path={routes.ROOT} exact component={HomePage} />
                  <Route path={routes.HOME} exact component={HomePage} />
                  <Route path={routes.ABOUT} exact component={AboutPage} />
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
                </div>
              </code>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
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
