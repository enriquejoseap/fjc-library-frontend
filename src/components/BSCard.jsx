import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BSCard = ({ img, buttonText, title, paragraph }) => {
  return (
    <Card className="rounded-0" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="bs-card-img rounded-0"
        src={img}
        alt={title}
      />
      <Card.Body>
        <Card.Title className="text-primary">
          <h4>{title}</h4>
        </Card.Title>
        <Card.Text>{paragraph}</Card.Text>
        <Link className="btn btn-primary">{buttonText}</Link>
      </Card.Body>
    </Card>
  );
};

BSCard.propTypes = {
  img: PropTypes.string,
  buttonText: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default BSCard;
