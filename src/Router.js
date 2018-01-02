import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import UserPage from './components/users/UserPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import ManageUserPage from './components/users/ManageUserPage';
import ManageCountryPage from './components/country/ManageCountryPage';
import CountryPage from './components/country/CountryPage';

import history from './utils/history';
import * as routes from './constants/routes';

function Router() {
  return (
    <BrowserRouter history={history}>
      <div>
        <Switch>
          <Route path={routes.ROOT} exact component={HomePage} />
          <Route path={routes.HOME} exact component={HomePage} />

          <Route path={routes.USERS} exact component={UserPage} />
          <Route path={routes.USER} exact component={ManageUserPage} />

          <Route path={routes.COUNTRIES} exact component={CountryPage} />
          <Route path={routes.COUNTRY} exact component={ManageCountryPage} />
          <Route path={routes.COUNTRYID} exact component={ManageCountryPage} />
          <Route path={routes.COURSES} exact component={CoursesPage} />
          <Route path={routes.COURSE} exact component={ManageCoursePage} />
          <Route path={routes.COURSEID} exact component={ManageCoursePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
