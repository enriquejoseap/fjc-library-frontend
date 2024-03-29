import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FUNDACIONJACINTOCONVIT, WEBSITEROUTES } from "../routes/routes";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { COLORS } from "../utils/colors";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <footer className="p-3 text-light">
      <Container>
        <Row>
          <Col className="pb-4 my-auto" sm={6} lg>
            <Link to={WEBSITEROUTES.HOME}>
              <img src="/icons/logo-light.png" alt="Fundacion Jacinto Convit" />
            </Link>
          </Col>
          <Col className="pb-4" sm={6} lg>
            <h5 className="footer-title">Información legal</h5>
            <ul>
              <li>
                <Link
                  target="_blank"
                  className="link-dark link"
                  to={WEBSITEROUTES.CONDITIONS}
                >
                  Condiciones de uso
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="link-dark link"
                  to={WEBSITEROUTES.QUALITY}
                >
                  Política de Calidad
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="link-dark link"
                  to={WEBSITEROUTES.PRIVACY}
                >
                  Políticas de privacidad
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="pb-4" sm={6} lg>
            <h5 className="footer-title">Contacto</h5>
            <ul>
              <li>
                Web:
                <Link
                  target="_blank"
                  className="link-dark link ps-1"
                  to={FUNDACIONJACINTOCONVIT.OFICIALPAGE}
                >
                  {FUNDACIONJACINTOCONVIT.OFICIALPAGE.replace("https://", "")}
                </Link>
              </li>
              <li>
                Email:
                <Link
                  className="link-dark link ps-1"
                  to={`mailto:${FUNDACIONJACINTOCONVIT.EMAIL}`}
                >
                  {FUNDACIONJACINTOCONVIT.EMAIL}
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="pb-4" sm={6} lg>
            <h5 className="footer-title">Redes sociales</h5>
            <Container>
              <Row className="media-icons-row">
                <Col>
                  <div className="media-icon-container">

                  <Link target="_blank" to={FUNDACIONJACINTOCONVIT.FACEBOOK}>
                    <FaFacebook size="1.8em" color={COLORS.ORANGE} />
                  </Link>
                  </div>
                  <div className="media-icon-container">

                  <Link target="_blank" to={FUNDACIONJACINTOCONVIT.INSTAGRAM}>
                    <FaInstagram size="1.8em" color={COLORS.ORANGE} />
                  </Link>
                  </div>
                  <div className="media-icon-container">

                  <Link target="_blank" to={FUNDACIONJACINTOCONVIT.LINKEDIN}>
                    <FaLinkedin size="1.8em" color={COLORS.ORANGE} />
                  </Link>
                  </div>
                  <div className="media-icon-container">

                  <Link target="_blank" to={FUNDACIONJACINTOCONVIT.TWITTER}>
                    <FaXTwitter size="1.8em" color={COLORS.ORANGE} />
                  </Link>
                  </div>
                  <div className="media-icon-container">
                    <Link target="_blank" to={FUNDACIONJACINTOCONVIT.YOUTUBE}>
                      <FaYoutube size="1.8em" color={COLORS.ORANGE} />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <hr />
        <FooterCopyright />
      </Container>
    </footer>
  );
};

export default Footer;
