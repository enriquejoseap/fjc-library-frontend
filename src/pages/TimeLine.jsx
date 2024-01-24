import { Col, Container, Row } from "react-bootstrap";
import Heading from "../components/Heading";
import "../assets/css/TimeLine.css";

const styles = {
  "timeline-main-section": {
    backgroundImage: "url('/img/bg/home-bg.webp')",
    backgroundSize: "cover",
  },
};

const TimeLine = () => {
  return (
    <>
      <Heading pageTitle={"LÍnea de tiempo"} />
      <Container fluid
        style={styles["timeline-main-section"]}
      >
        <Row className="py-4 text-center container-box" >
          <Col className="col-md-timeline">
            <div className="main-timeline">
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1913</div>
                  <h3 className="title">Natalicio</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer males uada tellus lorem, et condimentum neque
                    commodo Integer males uada tellus lorem, et condimentum
                    neque commodo
                  </p>
                </span>
              </div>
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1918</div>
                  <h3 className="title">Escuela primaria</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer males uada tellus lorem, et condimentum neque
                    commodo Integer males uada tellus lorem, et condimentum
                    neque commodo
                  </p>
                </span>
              </div>
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1928</div>
                  <h3 className="title">Bachillerato</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer males uada tellus lorem, et condimentum neque
                    commodo Integer males uada tellus lorem, et condimentum
                    neque commodo
                  </p>
                </span>
              </div>
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1932</div>
                  <h3 className="title">Universidad</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer males uada tellus lorem, et condimentum neque
                    commodo Integer males uada tellus lorem, et condimentum
                    neque commodo
                  </p>
                </span>
              </div>
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1938</div>
                  <h3 className="title">Doctorado</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer males uada tellus lorem, et condimentum neque
                    commodo Integer males uada tellus lorem, et condimentum
                    neque commodo
                  </p>
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="py-4 text-center">
          <hr />
          <Col>
            <h3 className="text-terciary">
              Jacinto Convit y la historia de un sueño
            </h3>
            <p>
              A través de este cortometraje aprenderás la historia del insigne
              Dr. Jacinto Convit época por época
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="px-5 pb-5 d-flex justify-content-center">
            <iframe
              loading="eager"
              allowFullScreen
              className="youtube-video"
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
