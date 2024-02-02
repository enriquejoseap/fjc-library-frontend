import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { investigaciones } from "../db/investigaciones";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GiSideswipe } from "react-icons/gi";
import { Link } from "react-router-dom";
import { WEBSITEROUTES } from "../routes/routes";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  let location = useLocation();

  let mainLocation = location.pathname.split("/")[1];
  const npage = investigaciones.length;

  useEffect(() => {
    setArticle(investigaciones.find((article) => article.id == id));
  }, [id]);

  if (!article) return null;

  return (
    <>
      <div style={{backgroundColor: "#f7f4f2"}}>
        <Container>
          <Row className="py-4">
            <Col xs={5}>
              <Link to={`/${mainLocation}`}>
                {" "}
                <Button>
                  <GiSideswipe /> {" "}
                  Volver
                </Button>
              </Link>
            </Col>
            <Col>
              <ul className="pagination">
                <li className={`page-item ${id == 1 ? "disabled" : ""}`}>
                  <Link
                    className="detail-arrow-prev page-link"
                    to={`/${mainLocation}/${Number.parseInt(id) - 1}`}
                  >
                    <span>&laquo;</span>
                  </Link>
                </li>
                <li>
                  {id} de {investigaciones.length}
                </li>
                <li className={`page-item ${id == npage ? "disabled" : ""}`}>
                  <Link
                    className="detail-arrow-next page-link"
                    to={`/${mainLocation}/${Number.parseInt(id) + 1}`}
                  >
                    <span>&raquo;</span>
                  </Link>
                </li>
              </ul>
            </Col>
            <hr />
          </Row>
          <Row className="pb-4">
            <Col md={4}>
              <img
                className="article-image"
                width="100%"
                src={article.image}
                alt={article.name}
              />
            </Col>
            <Col md={8}>
              <h1>{article.name}</h1>
              <h5 className="pt-4">
                {article.autor} - {article.year}
              </h5>
              <div className="py-4">
                <p>
                  <b>Extracto:</b> <q>{article.abstract}</q>
                </p>
              </div>
              <Button href={article.pdf} target="_blank">Leer PDF</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ArticleDetails;
