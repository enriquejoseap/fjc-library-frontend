import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import Heading from "../components/Heading";
import { investigaciones } from "../db/investigaciones";
import DocumentCard from "../components/DocumentCard";
import "../assets/css/Article.css";
import { WEBSITEROUTES } from "../routes/routes";
import { useEffect, useState } from "react";
import BSPagination from "../components/BSPagination";

const Research = () => {
  const [documents, setDocuments] = useState(null);
  const [records, setRecords] = useState([]);
  const [results, setResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handlePage = (n) => {
    setCurrentPage(n);
  };

  const handleChange = (e) => {
    setForm(e.target.value);
    setNoResults(false);

    if (e.target.value == "") {
      setResults(documents);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    let searchRecords = [];
    if (form) {
      searchRecords =
        documents.filter((item) =>
          item.name.toLowerCase().includes(form.toLowerCase())
        ) || [];
      if (searchRecords.length > 0) {
        setResults(searchRecords);
      } else {
        setResults([]);
        setNoResults(true);
      }
    }
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setDocuments(investigaciones);
    setResults(investigaciones);
  }, []);

  return (
    <>
      <Heading pageTitle={"Investigaciones científicas"} />
      <div className="main-content">
        <Container className="research-page">
          <Row className="py-4">
            <Col className="text-center">
              <h2 className="text-terciary">Resultados</h2>
              <h3>{results ? results.length : 0}</h3>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={(e) => handleSearch(e)}>
                <Form.Group className="mb-3">
                  <div className="document-searcher d-flex">
                    <Form.Control
                      type="text"
                      id="researchSearcher"
                      value={form}
                      onChange={(e) => handleChange(e)}
                    />
                    <Button onClick={(e) => handleSearch(e)}>Buscar</Button>
                  </div>
                </Form.Group>
                {noResults && (
                  <Alert
                    variant="danger"
                    onClose={() => {
                      setNoResults(false);
                      setResults(documents);
                    }}
                    dismissible
                  >
                    <Alert.Heading>Sin resultados</Alert.Heading>
                  </Alert>
                )}
              </Form>
            </Col>
          </Row>

          <Row className="py-4 text-center">
            {results &&
              results.length > 0 &&
              records.map((document, index) => (
                <Col xm={12} sm={6} md={3} key={index}>
                  <DocumentCard
                    image={document.image}
                    name={document.name}
                    url={`${WEBSITEROUTES.RESEARCH}/${document.id}`}
                  />
                </Col>
              ))}
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              {results && results.length > 0 && (
                <BSPagination
                  items={results}
                  setRecords={setRecords}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  prevPage={prevPage}
                  handlePage={handlePage}
                  nextPage={nextPage}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Research;
