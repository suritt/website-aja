import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

import YoutubeLogo from "./../../logos/Youtube.png";
import InstagramLogo from "./../../logos/Instagram.png";
import Facebooklogo  from "./../../logos/Facebook.png";
import AjaLogo  from "./../../logos/logo.png";


const Header = () => {
  return (
    //  Header
    <header className="background-header">
      <Navbar bg="default" expand="lg" style={{ backgroundColor: "white" }}>
        <Container fluid>
          <Navbar.Brand className="align-middle" href="/">
            <img src={AjaLogo} alt="Aja Logo" height={45} width={45}   />  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
         
              <Nav.Link href="/" style={{ fontWeight: "bold" }}>
                Institucional
              </Nav.Link>

              <Nav.Link href="/activities" style={{ fontWeight: "bold" }}>
                Actividades
              </Nav.Link>
              {/* 
              <Nav.Link href="/news" style={{ fontWeight: "bold" }}>
                Novedades
              </Nav.Link>
              
              <Nav.Link href="/team" style={{ fontWeight: "bold" }}>
                Equipo
              </Nav.Link>
              */}
              <Nav.Link href="/about" style={{ fontWeight: "bold" }}>
                Acerca de 
              </Nav.Link>
              <Nav.Link href="/gallery" style={{ fontWeight: "bold" }}>
                Galeria
              </Nav.Link>
              <Nav.Link href="/contact" style={{ fontWeight: "bold" }}>
                Contacto
              </Nav.Link>
              {/*   */}
              <Nav.Link href="https://youtube.com" style={{ fontWeight: "bold" }}>
                <img src={YoutubeLogo} alt="youtube Logo" height={22} width={30} />
               </Nav.Link>
              <Nav.Link href="https://instagram.com" style={{ fontWeight: "bold" }}>
              <img src={InstagramLogo} alt="instragram Logo" height={30} width={30} />
              </Nav.Link>
              <Nav.Link href="https://facebook.com" style={{ fontWeight: "bold" }}>
              <img src={Facebooklogo} alt="facebook Logo" height={30} width={30} />
              </Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
