import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    //  Header
    <header className="background-header">
      <Navbar bg="default" expand="lg" style={{ backgroundColor: "white" }}>
        <Container fluid>
          <Navbar.Brand className="align-middle" href="/">
            <h2 style={{ cursor: "pointer" }}>CWPH</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
         
              <Nav.Link href="/" style={{ fontWeight: "bold" }}>
                Institución
              </Nav.Link>
              <Nav.Link href="/team" style={{ fontWeight: "bold" }}>
                Programas y Equipo
              </Nav.Link>
              <Nav.Link href="/activities" style={{ fontWeight: "bold" }}>
                Galeria
              </Nav.Link>
              <Nav.Link href="/contact" style={{ fontWeight: "bold" }}>
                Contacto
              </Nav.Link>
              <Nav.Link href="/about" style={{ fontWeight: "bold" }}>
                Actividades y talleres
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
