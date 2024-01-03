import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ENRIQUEJOSEAP } from '../config/routes'

const FooterCopyright = () => {
  return (
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
                className="link-dark link ps-1"
                to={ENRIQUEJOSEAP.INSTAGRAM}
                target="_blank"
              >
                @enriquejoseap
              </Link>
            </span>
          </Col>
        </Row>
  )
}

export default FooterCopyright