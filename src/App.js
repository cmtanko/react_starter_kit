import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import CoursesPage from './components/course/CoursesPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/courses" exact component={CoursesPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
