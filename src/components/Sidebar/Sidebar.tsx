import { Nav } from "react-bootstrap";

export default function Sidebar() {
  return (
    <>
      <Nav
        className="mr-0 flex-column h-100"
        style={{ backgroundColor: "#555555" }}
      >
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </>
  );
}
