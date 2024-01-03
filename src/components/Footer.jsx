import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FUNDACIONJACINTOCONVIT,
  WEBSITEROUTES,
} from "../config/routes";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareYoutube,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";
import { COLORS } from "../config/colors";
import FooterCopyright from "./FooterCopyright";

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
                <Link className="link-dark link" to={WEBSITEROUTES.CONDITIONS}>
                  Condiciones de uso
                </Link>
              </li>
              <li>
                <Link className="link-dark link" to={WEBSITEROUTES.TERMS}>
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link className="link-dark link" to={WEBSITEROUTES.PRIVACY}>
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
          <Col className="pb-4" md>
            <h5 className="footer-title">Redes sociales</h5>
            <Container>
              <Row className="media-icons-row">
                <Col>
                  <Link to={FUNDACIONJACINTOCONVIT.FACEBOOK}>
                    <FaSquareFacebook size="2em" color={COLORS.WHITE} />
                  </Link>
                  <Link to={FUNDACIONJACINTOCONVIT.INSTAGRAM}>
                    <FaSquareInstagram size="2em" color={COLORS.WHITE} />
                  </Link>
                  <Link to={FUNDACIONJACINTOCONVIT.LINKEDIN}>
                    <FaLinkedin size="2em" color={COLORS.WHITE} />
                  </Link>
                  <Link to={FUNDACIONJACINTOCONVIT.TWITTER}>
                    <FaSquareXTwitter size="2em" color={COLORS.WHITE} />
                  </Link>
                  <Link to={FUNDACIONJACINTOCONVIT.YOUTUBE}>
                    <FaSquareYoutube size="2em" color={COLORS.WHITE} />
                  </Link>
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
