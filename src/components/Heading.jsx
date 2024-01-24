import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const styles = { backgroundImage: "url('/img/bg/heading-bg.webp')" };

const Heading = ({ pageTitle }) => {
  return (
    <Container style={styles} fluid className="heading-pages py-5">
      <Row className="py-3">
        <Col className="text-center">
          <h1>{pageTitle}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Heading;
