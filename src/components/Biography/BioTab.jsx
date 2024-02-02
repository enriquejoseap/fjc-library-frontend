import { Col, Container, Nav, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import Tab from "react-bootstrap/Tab";
import { tabContent } from "../../db/biografia";
import { WEBSITEROUTES } from "../../routes/routes";

const BioTab = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="Infancia">
        <Row>
          <Col>
            <Nav className="flex-row" justify>
              {tabContent.map((tab, index) => (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={tab.title}>{tab.title}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content>
              {tabContent.map((tab, index) => (
                <Tab.Pane eventKey={tab.title} key={index}>
                  <Container id={tab.title} className="px-5">
                    <article>
                      <Row>
                        <Col sm className="col-text">
                          <h4 className="text-secondary">{tab.subtitle}</h4>
                          <p style={{ whiteSpace: "pre-line" }}>
                            {tab.content}
                          </p>
                        </Col>
                        <Col className="d-flex">
                          <figure>
                            <img
                              className="tab-img"
                              src={tab.image}
                              alt={tab.title}
                            />
                          </figure>
                        </Col>
                      </Row>
                    </article>
                  </Container>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default BioTab;
