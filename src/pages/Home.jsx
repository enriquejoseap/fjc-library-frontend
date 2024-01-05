import HomeCarousel from "../components/HomeCarousel";
import "../assets/css/Home.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WEBSITEROUTES } from "../assets/js/routes";
import BSCard from "../components/BSCard";

function Home() {
  return (
    <>
      <h1 style={{ display: "none" }}>Biblioteca Jacinto Convit</h1>
      <section className="home-hero">
        <HomeCarousel />
      </section>
      <section className="home-container">
        <Container>
          <Row className="justify-content-md-center py-5">
            <Col sm={12} md={6}>
              <img
                className="home-img"
                src="/img/hero/home-lab.webp"
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
                img="/img/hero/home-ciencia.webp"
                paragraph="Investigaciones que han ayudado a salvar vidas"
                buttonText="Leer publicaciones científicas"
              />
            </Col>
            <Col>
              <BSCard
                title="Prensa"
                img="/img/hero/home-lab.webp"
                paragraph="Artículos de periodistas de todo el mundo y del escenario científico"
                buttonText="Leer artículos de la prensa"
              />
            </Col>
            <Col>
              <BSCard
                title="Frases"
                img="/img/hero/home-campo.webp"
                paragraph="Deja que te inspire a través de sus reflexiones científicas y filosóficas"
                buttonText="Leer sus reflexiones"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
