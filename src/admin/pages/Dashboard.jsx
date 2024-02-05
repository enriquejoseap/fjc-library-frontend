import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserContext from "../../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <Container className="admin-dashboard-page container-box">
      <Row className="py-4 text-center">
        <Col>
          <h2>
            Hola, <span className="admin-hello">{user.name}!</span> Bienvenido
            al panel Administrativo
          </h2>
        </Col>
        <hr />
      </Row>
      <Row className="pb-4">
        <Col>
          <h4 className="text-terciary">Aqui podrás:</h4>
          <h5>
            <ul>
              <li>Revisar el contenido de la base de datos</li>
              <li>Modificar los registros de la biblioteca</li>
              <li>Crear nuevas entrada para los usuarios</li>
              <li>Remover los documentos que ya no sean deseados</li>
              <li>Gestionar los usuarios registrados en la plataforma</li>
            </ul>
          </h5>
        </Col>
        <Col className="text-center">
          <img src="/dashboard/En su laboratorio.jpg" alt="" />
        </Col>
        <hr />
      </Row>
      <Row className="pb-4">
        <Col className="text-center">
          <img src="/dashboard/moneda cabo blanco.jpg" alt="" />
        </Col>
        <Col>
          <h4 className="text-terciary">
            Gracias por contribuir con el proyecto
          </h4>
          <h5>
            El proyecto está alojado en el siguiente repositorio de GitHub:
          </h5>
          <h5>
            <ul>
              <li>
                <a
                  style={{ color: "#e67634" }}
                  className="nav-link"
                  href="github.com/enriquejoseap/fjc-library-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend
                </a>
              </li>
              <li>
                <a
                  style={{ color: "#e67634" }}
                  className="nav-link"
                  href="github.com/enriquejoseap/fjc-library-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend
                </a>
              </li>
            </ul>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
