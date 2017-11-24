import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>React-Starter-Kit</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href='#'>Home</NavItem>
              <NavItem eventKey={2} href='#'>Users</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href='#'>Register</NavItem>
              <NavItem eventKey={2} href='#'>Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Jumbotron>
            <h1>React Starter Kit</h1>
            <p>
              This is a front end using react , using backend as Node.
            </p>
            <p><Button bsStyle='primary'>Learn more</Button></p>
          </Jumbotron>
        </div>

      </div>
    )
  }
}

export default App
