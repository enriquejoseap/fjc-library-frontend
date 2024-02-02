import { Link } from "react-router-dom";

const styles = {};

const DocumentCard = ({ name, image, url }) => {
  return (
    <Link className="article-link" to={url}>
      <article className="article-card">
        <img width={"100%"} style={{maxWidth: "200px"}} src={image} alt={name} />
        <h4 className="article-name text-dark mt-1">
          {name}
        </h4>
      </article>
    </Link>
  );
};

export default DocumentCard;
