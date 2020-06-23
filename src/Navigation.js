import React,{Component} from 'react';
import './Navigation.css';
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Navigation extends Component{
	render(){
		return(
			<Navbar bg="primary" expand="lg" id="header">
  <Navbar.Brand href="/">ITSP-2020</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="ITSP">Teams</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            );
	}
}


export default Navigation;