import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { investigaciones } from "../../db/investigaciones";
import { GiHealthNormal, GiPencil, GiTrashCan } from "react-icons/gi";

const AdminResearch = () => {
  return (
    <Container>
      <Row className="py-4">
        <Col>
          <h1>
            Gestor de <span style={{ color: "#e67634" }}>Investigaciones</span>
          </h1>
          <hr />
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <h2>
            Tabla de <span style={{ color: "#e67634" }}>Gestión</span>
          </h2>
          <Button variant="info"> Nuevo registro
          </Button>
          <div className="container-table">
            <Table>
              <thead>
                <tr>
                  {Object.keys(investigaciones[0]).map((el, index) => (
                    <th key={index}>{el.toUpperCase()}</th>
                  ))}
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {investigaciones.map((el, index) => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>
                      <img width={40} src={el.image} alt="" />
                    </td>
                    <td>{el.abstract}</td>
                    <td>{el.autor}</td>
                    <td>{el.year}</td>
                    <td>{el.pdf}</td>
                    <td>
                      <Button
                        title="Eliminar"
                        className="me-2"
                        variant="danger"
                      >
                        <GiTrashCan size={25} />
                      </Button>

                      <Button title="Editar" variant="warning">
                        <GiPencil size={25} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminResearch;
