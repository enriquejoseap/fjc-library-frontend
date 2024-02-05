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
      <Container fluid style={styles["timeline-main-section"]}>
        <Row className="py-4 text-center container-box">
          <Col className="col-md-timeline">
            <div className="main-timeline">
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1913</div>
                  <h3 className="title">Natalicio</h3>
                  <p className="description">
                    Jacinto Convit García nace el 11 de septiembre de 1913 en La
                    Pastora, un hermoso lugar colonial ubicado al noroeste de
                    Caracas, capital de Venezuela. Sus padres, Francisco de Asís
                    Convit y Martí, un inmigrante catalán, y Flora García
                    Marrero, inmigrante de origen canario.
                  </p>
                </span>
              </div>
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1918</div>
                  <h3 className="title">Escuela primaria</h3>
                  <p className="description">
                    El joven Jacinto cursa sus estudios de primaria en el
                    Colegio San Pablo de Caracas, bajo la dirección de los
                    hermanos Roberto y Raimundo Centeno, insignes educadores de
                    la época. La escuela tiene un ambiente familiar donde se
                    recalca la importancia de los valores y las buenas
                    costumbres.
                  </p>
                </span>
              </div>
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1928</div>
                  <h3 className="title">Bachillerato</h3>
                  <p className="description">
                    Realiza la secundaria en el Liceo Caracas —hoy denominado
                    Complejo Educativo Andrés Bello— bajo la dirección de dos
                    distinguidos maestros: Don Pedro Arnal y Don Rómulo
                    Gallegos; este último, profesor de filosofía y reconocido
                    escritor, quien luego se convierte en Presidente de
                    Venezuela.
                  </p>
                </span>
              </div>
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1932</div>
                  <h3 className="title">Universidad</h3>
                  <p className="description">
                    A los diecinueve años de edad, se inscribe en la Escuela de
                    Medicina de la UCV —antigua sede y actual Palacio de las
                    Academias—. Durante sus estudios reconoce el alto nivel de
                    excelencia de sus profesores y demuestra gran vocación por
                    la medicina, obteniendo destacadas calificaciones, dignas de
                    diplomas de honor en materias como: física y química,
                    anatomía topográfica, patología externa y terapéutica,
                    clínica quirúrgica, patología interna y clínica médica.
                  </p>
                </span>
              </div>
              <div className="timeline">
                <span href="#" className="timeline-content">
                  <div className="timeline-year">1938</div>
                  <h3 className="title">Doctorado</h3>
                  <p className="description">
                    El 17 de septiembre de 1938 Jacinto opta por el título de
                    Doctor en Ciencias Médicas, con la presentación de la tesis
                    “Fracturas de la columna vertebral”. El 22 del mismo mes
                    presenta el examen integral requerido para obtener el grado.
                    A los veinticinco años de edad, con la aprobación exitosa de
                    todos los requisitos, recibe el título en Filosofía y Doctor
                    en Ciencias Médicas.
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
