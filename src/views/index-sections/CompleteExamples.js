import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Other Important Links</h2>
              <h5 className="description">
                Here are some other links that might be useful for all of you.
              </h5>
              <h4> MADE WITH <i className="fa fa-heart" /> BY CHESS IITR.</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
