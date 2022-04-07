import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
const Navigator = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href='#home'>HCI</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigator;
