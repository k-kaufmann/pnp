import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="primary" variant="dark" className="mb-3 shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Cthuditor
        </Navbar.Brand>
        <Nav className="me-auto">
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Charaktere</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/charaktere">
                Uebersicht
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/charaktere/berufe">
                Berufe
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
