import React, { useState } from "react";
import Heading from "../components/Heading";
import { Col, Container, Form, Row } from "react-bootstrap";
import PaypalButton from "../components/Donations/PaypalButton";
import "../assets/css/Donations.css";

const Donations = () => {

  return (
    <>
      <div className="donations-page pb-4">
        <Container className="mb-4 p-5 donation-heading" fluid>
          <Row>
            <Col lg={5}>
              <h2 className="text-light">
                Tu donación apoyará al futuro de la ciencia
                <hr style={{ color: "#fff" }} />
              </h2>
            </Col>
            <Col className="text-center"></Col>
          </Row>
        </Container>
        <Container>
          <Row className="py-4">
            <Col md>
              <h3 className="text-primary">
                Mantengamos el legado del doctor Jacinto Convit juntos
              </h3>
              <p>
                Gracias por considerar donar a la Fundación Jacinto Convit, la
                fundación sin fines de lucro que aloja la Biblioteca Digital
                Jacinto Convit y otros proyectos cruciales para el desarrollo y
                avance de la ciencia.
                <br /> <br /> La Biblioteca Digital es un lugar para aprender,
                libre de sesgos o de intenciones ocultas. Te invitamos a donar
                la cantidad que consideres. Muéstrale al mundo que el acceso a
                la información independiente e imparcial es importante para ti.
                Gracias.
              </p>
            </Col>
            <Col className="text-center">
              <PaypalButton
                invoice={"Apoyo a la Biblioteca Digital Jacinto Convit"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Donations;
