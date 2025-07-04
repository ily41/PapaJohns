import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router"

const Header = () => {
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
                <Nav.Link href="#deets">Cart</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
   </header>
  )
}

export default Header
