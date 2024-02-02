import Heading from "../components/Heading";
import { Col, Container, Row, Table } from "react-bootstrap";
import "../assets/css/Curriculum.css";
import {
  categoriesFilters,
  curriculumContent,
  resumen,
  timeFilters,
} from "../db/curriculum";
import { useEffect, useState } from "react";
import CurriculumSearcher from "../components/Curriculum/CurriculumSearcher";

const initForm = { period: timeFilters, category: categoriesFilters };

const Curriculum = () => {
  const [filters, setFilters] = useState(initForm);
  const [curriculum, setCurriculum] = useState(curriculumContent);

  useEffect(() => {
    console.log(
      curriculum.filter(
        (content) =>
          filters.period.includes(content.period) ||
          filters.category.includes(content.category)
      )
    );
  }, [filters]);

  const handleCheck = (e) => {
    let targetName = e.target.name;
    if (targetName.includes("period")) {
      targetName = targetName.replace("period-", "");
      if (e.target.checked) {
        setFilters({ ...filters, period: [...filters.period, targetName] });
      } else {
        setFilters({
          ...filters,
          period: filters.period.filter((item) => item != targetName),
        });
      }
    } else if (targetName.includes("category")) {
      targetName = targetName.replace("category-", "");
      if (e.target.checked) {
        setFilters({
          ...filters,
          category: [...filters.category, targetName],
        });
      } else {
        setFilters({
          ...filters,
          category: filters.category.filter((item) => item != targetName),
        });
      }
    }
  };

  return (
    <>
      <Heading pageTitle={"Curriculum vitae"} />
      <div className="main-content">
        <Container className="curriculum-page" fluid>
          <Row className="py-4 text-center row-heading ">
            <Col>
              <h3 className="text-terciary">Resumen</h3>
            </Col>
          </Row>
          <Row className="pt-4 container-box">
            <Col sm>
              <h3 className="text-dark">Jacinto Convit</h3>
              <p className="text-dark">
                Nació en Caracas, el 11 de septiembre de 1913.
              </p>
              <p className="text-dark">
                Cursó Educación Primaria en el Colegio San Pablo de Caracas,
                bajo la dirección de los Profesores Roberto y Raimundo Centeno.{" "}
                <br />
                <br />
                Cursó Educación Secundaria en el Liceo Andrés Bello de Caracas,
                bajo la dirección del Profesor Don Rómulo Gallegos y luego del
                Profesor Don Pedro Arnal.
                <br />
                <br />
                En el año 1932 inició sus estudios de Medicina en la Universidad
                Central de Venezuela (UCV). En 1938 obtiene el título de Doctor
                en Ciencias Médicas con honores.
              </p>
              <p>El Dr. Jacinto Convit fallece el 12 de mayo del año 2014.</p>
            </Col>
            <Col className="d-flex justify-content-center">
              <figure className="">
                <img
                  className="jc-main-img"
                  src="/img/curriculum/curriculum-jacinto-convit.webp"
                  alt="Jacinto Convit"
                />
              </figure>
            </Col>
            <hr />
          </Row>
          <Row className="py-4 text-center row-heading ">
            <Col>
              <h3 className="text-terciary">Tabla de hitos</h3>
            </Col>
          </Row>
          <Row className="pb-4 container-box">
            <Col className="table-col">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Periodo</th>
                    <th>Reconocimientos</th>
                    <th>Participaciones en reuniones científicas</th>
                    <th>Publicaciones científicas</th>
                    <th>Promociones en su honor</th>
                  </tr>
                </thead>
                <tbody>
                  {resumen.map((periodo, index) => (
                    <tr key={index}>
                      <th>{periodo.period}</th>
                      <td>{periodo.reconocimientos}</td>
                      <td>{periodo.participacionesReuniones}</td>
                      <td>{periodo.publicacionesCientificas}</td>
                      <td>{periodo.promociones}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
      <CurriculumSearcher
        timeFilters={timeFilters}
        categoriesFilters={categoriesFilters}
        curriculum={curriculum}
        filters={filters}
        handleCheck={handleCheck}
      />
    </>
  );
};

export default Curriculum;
