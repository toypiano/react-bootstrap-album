import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "./Jumbotron";
import Album from "./Album";

const Main = props => {
  return (
    <div className="Main">
      <Container>
        <Jumbotron />
      </Container>
      <div className="bg-light py-5">
        <Container>
          <Row>
            <Album cards={7} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Main;
