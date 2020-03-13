import React from "react";
import { lorem } from "faker";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const PhotoCard = props => {
  return (
    <Col
      md={4}
      className="d-flex align-contents-stretch"
    >
      <Card className="mb-4 shadow-sm">
        <Card.Img
          variant="top"
          src={
            "//placem.at/things?w=400&h=225&random=" +
            props.id
          }
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Text>{lorem.words(20)}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <ButtonGroup>
              <Button
                size="sm"
                variant="outline-secondary"
              >
                View
              </Button>
              <Button
                size="sm"
                variant="outline-secondary"
              >
                Edit
              </Button>
            </ButtonGroup>
            <small className="text-muted">
              9min
            </small>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PhotoCard;
