import React from "react";
import { lorem } from "faker";
import Button from "react-bootstrap/Button";

const Jumbotron = props => {
  return (
    <section className="jumbotron bg-white text-center mt-5 mb-1">
      <h1 className="font-weight-light">
        Album example
      </h1>
      <p className="lead text-muted">
        {lorem.words(20)}
      </p>
      <p>
        <Button href="#">Create Album</Button>{" "}
        <Button href="#" variant="secondary">
          Learn More
        </Button>
      </p>
    </section>
  );
};

export default Jumbotron;
