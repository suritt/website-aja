import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    //  Header
    <header className="background-header">
      <Navbar bg="default" expand="lg" style={{ backgroundColor: "white" }}>
        <Container fluid>
          <Navbar.Brand className="align-middle" href="/">
            <img src="../../../public/images/nuevas/logo.jpg" alt="icono logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
         
              <Nav.Link href="/" style={{ fontWeight: "bold" }}>
                Institucional
              </Nav.Link>
              <Nav.Link href="/team" style={{ fontWeight: "bold" }}>
                Actividades
              </Nav.Link>
              <Nav.Link href="/about" style={{ fontWeight: "bold" }}>
                Novedades
              </Nav.Link>
              <Nav.Link href="/activities" style={{ fontWeight: "bold" }}>
                Galeria
              </Nav.Link>
              <Nav.Link href="/contact" style={{ fontWeight: "bold" }}>
                Contacto
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
