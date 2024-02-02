import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { FaCircleInfo } from "react-icons/fa6";

const CurriculumSearcher = ({
  timeFilters,
  categoriesFilters,
  curriculum,
  filters,
  handleCheck,
}) => {
  return (
    <Container className="curriculum-wiki" fluid>
      <Row className="py-4 text-center row-heading ">
        <Col>
          <h3 className="text-secondary">Contenido del currículum</h3>
        </Col>
      </Row>
      <Row className="container-box">
        <Col md={3} className="filter-col">
          <h4 className="text-center pt-3">Filtros</h4>
          <hr />
          <form>
            <div>
              <h5>Periodos</h5>
              {timeFilters.map((period, index) => (
                <div key={index} className="d-flex ">
                  <input
                    className="me-2"
                    type="checkbox"
                    name={`period-${period}`}
                    id={`period-${period}`}
                    onChange={handleCheck}
                    defaultChecked
                  />
                  <label htmlFor={`period-${period}`}>{period}</label>
                </div>
              ))}
            </div>
            <hr />
            <div>
              <h5>Categorías</h5>
              {categoriesFilters.map((category, index) => (
                <div key={index} className="d-flex ">
                  <input
                    className="me-2"
                    type="checkbox"
                    name={`category-${category}`}
                    id={`category-${category}`}
                    onChange={handleCheck}
                    defaultChecked
                  />
                  <label htmlFor={`category-${category}`}>{category}</label>
                </div>
              ))}
            </div>
          </form>
        </Col>
        <Col className="wiki-content-col">
          <div>
            <article style={{ whiteSpace: "pre-line" }}>
              {curriculum
                .filter(
                  (content) =>
                    filters.period.includes(content.period) ||
                    filters.category.includes(content.category)
                )
                .map((article, index) => (
                  <p key={index}>{article.content}</p>
                ))}
            </article>
            {filters.category.length == 0 && filters.period.length == 0 && (
              <Alert variant="primary">
                <FaCircleInfo className="me-2" />
                Utiliza los filtros de búsqueda para visualizar la información
              </Alert>
            )}
          </div>
        </Col>
        <hr />
      </Row>
    </Container>
  );
};

export default CurriculumSearcher;
