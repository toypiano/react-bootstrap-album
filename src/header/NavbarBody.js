import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { lorem } from "faker";

const Contact = () => (
  <>
    <h4 className="text-white">Contact</h4>
    <ul className="list-unstyled">
      {["Follow on Twitter", "Like on Facebook", "Email me"].map((text, i) => (
        <li key={i}>
          <Button variant="link" className="text-white text-nowrap">
            {text}
          </Button>
        </li>
      ))}
    </ul>
  </>
);

const lorem20 = lorem.words(20);

const NavbarBody = props => {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [props.show]);

  const currentHeight = props.show ? height : 0;
  const classes = "NavbarBody bg-dark mt-5";

  return (
    <div
      className={props.show ? classes + " show" : classes}
      style={{ height: currentHeight + "px" }}
    >
      <Container ref={ref}>
        <Row>
          <Col sm="8" md="7" className="py-4">
            <h4 className="text-white">About</h4>
            <p className="text-muted">{lorem20}</p>
          </Col>
          <Col sm="4" md={{ offset: 1 }} className="py-4">
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarBody;
