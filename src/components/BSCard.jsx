import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BSCard = ({ img, buttonText, title, paragraph }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" className="bs-card-img" src={img} alt={title} />
      <Card.Body>
        <Card.Title className="text-primary"><h4>{title}</h4></Card.Title>
        <Card.Text>{paragraph}</Card.Text>
        <Link className="btn btn-primary">{buttonText}</Link>
      </Card.Body>
    </Card>
  );
};

export default BSCard;
