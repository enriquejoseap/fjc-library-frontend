import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ENRIQUEJOSEAP,
  FUNDACIONJACINTOCONVIT,
  WEBSITEROUTES,
} from "../config/routes";
import { FaSquareFacebook , FaSquareXTwitter, FaSquareYoutube, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-3 text-light">
      <Container>
        <Row>
          <Col className="pb-4 my-auto" md>
            <Link to={WEBSITEROUTES.HOME}>
              <img src="/icons/logo-light.png" alt="Fundacion Jacinto Convit" />
            </Link>
          </Col>
          <Col className="pb-4" md>
            <h5 className="footer-title">Información legal</h5>
            <ul>
              <li>
                <Link className="link-light link" to={WEBSITEROUTES.CONDITIONS}>
                  Condiciones de uso
                </Link>
              </li>
              <li>
                <Link className="link-light link" to={WEBSITEROUTES.TERMS}>
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link className="link-light link" to={WEBSITEROUTES.PRIVACY}>
                  Políticas de privacidad
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="pb-4" md>
            <h5 className="footer-title">Contacto</h5>
            <ul>
              <li>
                Web:
                <Link
                  className="link-light link ps-1"
                  to={FUNDACIONJACINTOCONVIT.OFICIALPAGE}
                >
                  {FUNDACIONJACINTOCONVIT.OFICIALPAGE.replace("https://", "")}
                </Link>
              </li>
              <li>
                Email:
                <Link
                  className="link-light link ps-1"
                  to={`mailto:${FUNDACIONJACINTOCONVIT.EMAIL}`}
                >
                  {FUNDACIONJACINTOCONVIT.EMAIL}
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="pb-4" md>
            <h5 className="footer-title">Redes sociales</h5>
            <Container>
              <Row>
                <Col>
                  <Link to={FUNDACIONJACINTOCONVIT.FACEBOOK}>
                    <FaSquareFacebook size="2em" />
                  </Link>
                  <Link to={FUNDACIONJACINTOCONVIT.INSTAGRAM}>
                    <FaFacebook size="2em" />
                  </Link>
                  <Link to={FUNDACIONJACINTOCONVIT.LINKEDIN}>
                    <FaFacebook size="2em" />
                  </Link>
                  <Link to={FUNDACIONJACINTOCONVIT.TWITTER}>
                    <FaFacebook size="2em" />
                  </Link>
                  <Link to={FUNDACIONJACINTOCONVIT.YOUTUBE}>
                    <FaFacebook size="2em" />
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col className="copyright">
            <span>
              Fundación Jacinto Convit | RIF-j-40111708-2 © 2020 Todos los
              derechos reservados
            </span>
            <br />
            <span>
              Diseñado y desarrollado por
              <Link
                className="link-light link ps-1"
                to={ENRIQUEJOSEAP.INSTAGRAM}
                target="_blank"
              >
                @enriquejoseap
              </Link>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
