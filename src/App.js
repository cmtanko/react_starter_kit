import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import { Grid, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Grid>
            <Row className="show-grid">
              <code>
                <div>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/home" exact component={HomePage} />
                  <Route path="/about" exact component={AboutPage} />
                  <Route path="/courses" exact component={CoursesPage} />
                  <Route path="/course" exact component={ManageCoursePage} />
                  <Route
                    path="/course/:id"
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

export default App;
