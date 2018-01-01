import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import LoadingDots from './LoadingDots';
import * as header from '../../constants/common';

const Header = ({ loading }) => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">React-Starter-Kit</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/home">
            <NavItem>{header.HOME}</NavItem>
          </LinkContainer>
          <LinkContainer to="/users">
            <NavItem>{header.USERS}</NavItem>
          </LinkContainer>

          <LinkContainer to="/countries">
            <NavItem>{header.COUNTRIES}</NavItem>
          </LinkContainer>

          {loading && <LoadingDots interval={100} dots={20} />}
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/register">
            <NavItem>{header.REGISTER}</NavItem>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavItem>{header.LOGIN}</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
