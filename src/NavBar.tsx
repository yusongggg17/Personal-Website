import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";

function NavBar(){
  function scrollToSection(id:string){
    const sectionId=document.getElementById(id);
    if(sectionId){
      sectionId.scrollIntoView({behavior:'smooth'});
    }
  }
    return(
        <Navbar expand="lg" className="NavBar">
        <Container style={{position: 'relative', display: 'flex', justifyContent: 'space-between'}}>
          <p className="NavBarBrand">YL</p>
            <Nav style={{marginTop:'1.5rem'}}>
              <Nav.Link as={Link} to ="/"  className="NavBarText">Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('Profile')}  className="NavBarText">About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('Projects')} className="NavBarText">Projects</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('Contact')}  className="NavBarText">Contact</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;