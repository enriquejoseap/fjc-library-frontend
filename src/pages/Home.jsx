import HomeCarousel from "../components/HomeCarousel";
import "../assets/css/Home.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FUNDACIONJACINTOCONVIT, WEBSITEROUTES } from "../assets/js/routes";
import BSCard from "../components/BSCard";

const styles = {
  "home-main-section": { backgroundImage: "url('/img/bg/home-bg.webp')" },
  "home-last-section": { backgroundImage: "url('/img/home/home-legado.webp')" },
};

function Home() {
  return (
    <>
      <h1 style={{ display: "none" }}>Biblioteca Jacinto Convit</h1>
      <section className="home-hero">
        <HomeCarousel />
      </section>
      <section
        style={styles["home-main-section"]}
        className="home-main-section"
      >
        <Container>
          <Row className="justify-content-md-center py-5">
            <Col sm={12} md={6}>
              <img
                className="home-img"
                src="/img/home/home-lab.webp"
                alt="Laboratorio"
              />
            </Col>
            <Col sm={12} md={6}>
              <h3 className="text-terciary">Descubre su visión del mundo</h3>
              <p>
                Adéntrate a la Caracas de antaño y descubre a un niño cazando
                mariposas amarillas en La Pastora, acompáñalo en su travesía
                desde Cabo Blanco hasta el Instituto de Biomedicina y conoce
                todos sus aportes para la humanidad.
                <br />
                <br />
                <q>
                  <i>
                    Yo creo que los sentimientos de amor hacia el ser humano van
                    a estimular en él la vocación de servicio, que no es otra
                    cosa que un profundo amor a la vida.
                  </i>
                </q>
                <br />
                <br />
                -Dr. Jacinto Convit
              </p>
              <Link className="btn btn-primary" to={WEBSITEROUTES.REFLECTIONS}>
                Leer biografía
              </Link>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <Row className="pt-3 pb-3 text-center">
            <Col>
              <h3 className="text-terciary">Aprende de sus publicaciones</h3>
              <p>
                Conoce su filosofía científica y visionaria que acumula más de
                setenta años de trabajos y noticias sobre él..
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center pb-5">
            <Col>
              <BSCard
                title="Científicas"
                img="/img/home/home-ciencia.webp"
                paragraph="Investigaciones que han ayudado a salvar vidas"
                buttonText="Leer publicaciones científicas"
              />
            </Col>
            <Col>
              <BSCard
                title="Prensa"
                img="/img/home/home-lab.webp"
                paragraph="Artículos de periodistas de todo el mundo y del escenario científico"
                buttonText="Leer artículos de la prensa"
              />
            </Col>
            <Col>
              <BSCard
                title="Frases"
                img="/img/home/home-campo.webp"
                paragraph="Deja que te inspire a través de sus reflexiones científicas y filosóficas"
                buttonText="Leer sus reflexiones"
              />
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <Row className="justify-content-md-center py-5">
            <Col sm={12} md={6}>
              <h3 className="text-terciary">
                Aprende la historia de una nominación a premio Nobel de la Paz
                en Medicina
              </h3>
              <p>
                Descubre la historia que rodea a la vacuna de la lepra y todos
                sus retos y desafíos a través de documentos oficiales
                recolectados durante toda su vida.
                <br />
                <br />
              </p>
              <Link className="btn btn-primary" to={WEBSITEROUTES.REFLECTIONS}>
                Leer investigaciones
              </Link>
            </Col>
            <Col sm={12} md={6}>
              <img
                className="home-img"
                src="/img/home/home-lepra.webp"
                alt="Laboratorio"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section
        style={styles["home-last-section"]}
        className="home-last-section"
      >
        <Container className="p-5">
          <Row className="pb-5 text-center">
            <Col>
              <h3 className="text-secondary">Matenemos vivo el legado</h3>
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col sm={12} md className="d-flex justify-content-center">
              <Link target="_blank" to={FUNDACIONJACINTOCONVIT.OFICIALPAGE}>
                <img
                  width="200px"
                  src="/icons/fjcBlue.png"
                  alt="Jacinto Convit World Organization"
                />
              </Link>
            </Col>
            <Col
              style={{ color: "white" }}
              className="d-flex justify-content-center align-items-center"
            >
              <p>
                Institución sin fines de lucro que genera investigación
                científica, programas asistenciales de salud, proyectos
                educativos y comunitarios, de la mano de un equipo
                multidisciplinario, para contribuir con el bienestar de las
                poblaciones más vulnerables y con el desarrollo social del país.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={12} md className="d-flex justify-content-center">
              <Link target="_blank" to={FUNDACIONJACINTOCONVIT.INTERNATIONAL}>
                <img
                  width="200px"
                  src="/icons/fjcPurple.png"
                  alt="Jacinto Convit World Organization"
                />
              </Link>
            </Col>
            <Col
              style={{ color: "white" }}
              className="d-flex justify-content-center align-items-center"
            >
              <p>
                Non-profit and non-governmental organization incorporated in
                2014, that contributes primarily to important areas of public
                health, such as cancer and endemic infectious diseases in
                developing countries with poor health conditions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
