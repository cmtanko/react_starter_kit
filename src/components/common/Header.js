import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LoadingDots from './LoadingDots';
import PropTypes from 'prop-types';

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
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/courses">
            <NavItem>Courses</NavItem>
          </LinkContainer>

          {loading && <LoadingDots interval={100} dots={20} />}
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/register">
            <NavItem>Register</NavItem>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavItem>Login</NavItem>
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
