import React from "react";
import Heading from "../components/Heading";
import { Col, Container, Row } from "react-bootstrap";
import BioTab from "../components/Biography/BioTab";
import "../assets/css/Biography.css"



const Biography = () => {
  return (
    <>
      <Heading pageTitle={"Biografía"} />
      <Container
        className="biography-page"
        fluid
      >
        <Row className="py-4 text-center row-heading">
          <Col>
            <h3 className="text-secondary">
              Médico, Cientifico, Docente y Humanista
            </h3>
            <p className="text-light">
              Jacinto Convit (1913-2014) es un médico, dermatólogo, leprólogo,
              investigador y docente, declarado como{" "}
              <i>
                <q>Héroe de la Salud Pública</q>
              </i>{" "}
              por la Organizacion Panamericana de la Salud-Organización Mundial
              de la Salud, y considerado uno de los cientificos venezolanos más
              influyentes del siglo XX y XXI.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <BioTab />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Biography;
