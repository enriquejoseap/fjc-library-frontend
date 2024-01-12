import { Col, Container, Row } from "react-bootstrap";
import Heading from "../components/Heading";
import "../assets/css/TimeLine.css"

const styles = {
    "timeline-main-section": { backgroundImage: "url('/img/bg/home-bg.webp')" },
  };

const TimeLine = () => {
  return (
    <>
      <Heading pageTitle={"LÍnea de tiempo"} />
      <Container fluid style={styles["timeline-main-section"]} >
      <Row className="py-4 text-center">
            <Col>
              <h3 className="text-terciary">Jacinto Convit y la historia de un sueño</h3>
              <p>
                A través de este cortometraje aprenderás la historia del insigne Dr. Jacinto Convit época por época
              </p>
            </Col>
          </Row>
        <Row>
          <Col className="px-5 pb-5">
            <iframe loading="eager" allowFullScreen className="youtube-video"
              autoPlay={1}
              src="https://www.youtube.com/embed/ArZh76uUzjA?autoplay=1"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TimeLine;
