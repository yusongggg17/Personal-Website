import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";

function NavBar(){
    return(
        <Navbar expand="lg" className="NavBar">
        <Container>
          <Navbar.Brand as={Link} to ="/">YL</Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to ="/">Home</Nav.Link>
              <Nav.Link href="#Profile">About</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;