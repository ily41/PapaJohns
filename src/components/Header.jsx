import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink, useOutletContext } from "react-router"
import { BsCart4 } from "react-icons/bs"



const Header = (setShow,) => {
  
  return (
   <header>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
                <img id = "logo"   src="../Public/Assets/Img/logo.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="main">Home</NavLink >
                <NavLink className="nav-link" to="menu">Menu</NavLink >
                <NavLink className="nav-link" to="contact">Contact</NavLink >
              </Nav>
              <Nav>
                <Button onClick={() => setShow.setShow(true)} className="btn-light p-0 position-relative" size="sm">
                  <BsCart4  size="30" /> 
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>  
        </Navbar>
   </header>
  )
}

export default Header
