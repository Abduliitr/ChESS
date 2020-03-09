import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="https://www.iitr.ac.in/" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing-iitr.png")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="https://www.iitr.ac.in/"
                outline
                tag={Link}
              >
                View IITR Website
              </Button>
            </div>
            <div className="col">
              <a href="https://www.iitr.ac.in/" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing-iitr.png")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="https://www.iitr.ac.in/"
                outline
                tag={Link}
              >
                View Profile Page
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
