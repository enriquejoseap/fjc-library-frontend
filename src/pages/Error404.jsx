import { Link } from "react-router-dom";
import { COLORS } from "../utils/colors";
import { WEBSITEROUTES } from "../routes/routes";

const Error404 = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center row">
          <div className=" col-md">
            <h1>
              <span style={{ color: COLORS.RED }}>404</span> <br />
              <span style={{ color: COLORS.ORANGE }}>Not found</span>
            </h1>
            <hr />
            <p className="fs-3">
              {" "}
              <span style={{ color: COLORS.RED }}>Opps!</span> No se encontró la página.
            </p>
            <p className="lead">Parece que la página que estás buscando no existe.</p>
            <Link className="btn btn-primary" to={WEBSITEROUTES.HOME}>
              Ir a Inicio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
