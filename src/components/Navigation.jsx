import React from 'react'
import image from './MVIT-logo2.png'
import {Navbar,Nav,NavDropdown,Button,Form,Container,FormControl} from 'react-bootstrap';
import YearData from './YearData';
const Navigation = () => {
  return (
    <>
    <div style={{width:"100%",position:"fixed"}}>
  <Navbar collapseOnSelect expand="lg" bg="info" variant="success"  >
        <img
          src={image}
          width="290rem"
          height="100rem"
          className="d-inline-block align-top"
        />
        <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"  variant="tabs">
      <Nav.Link href="#" style={{color:"black"}}>Staff</Nav.Link>
      <Nav.Link style={{color:"black"}} href="#">
        Student
      </Nav.Link>
      <Nav.Link href="#" style={{color:"black"}}>Home</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
    </>
  )
}

export default Navigation