import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import { ReactComponent as AppLogo } from "../logo.svg";
import NavbarBody from "./NavbarBody";

const Header = props => {
  const [show, setShow] = React.useState(false);

  const handleShow = e => {
    setShow(!show);
  };

  return (
    <div className="Header" id="top">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#">
            <AppLogo />
            <strong>Album</strong>
          </Navbar.Brand>
          <Button variant="outline-secondary" onClick={handleShow}>
            <span className="navbar-toggler-icon" />
          </Button>
        </Container>
      </Navbar>
      <NavbarBody show={show} />
    </div>
  );
};

export default Header;
