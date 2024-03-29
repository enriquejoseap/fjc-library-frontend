import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { WEBSITEROUTES } from "../../routes/routes";

const slides = [
  {
    title: "Conoce al insigne científico y humanista",
    subtitle: "Dr. Jacinto Convit",
    paragraph: "A través de nuestra biblioteca digital",
    img: "/img/home/home-prensa.webp",
    buttonText: "Ir a Biografía",
    url: WEBSITEROUTES.BIO,
  },
  {
    title: "Aprende de su trayecto a través del",
    subtitle: "Bibliotecario",
    paragraph: "Hazle cualquier consulta!",
    img: "/img/home/Jacinto Convit,  (97 años).jpg",
    buttonText: "Ir al Bibliotecario",
    url: "http://localhost:8000/",
  },
  {
    title: "Conoce al insigne científico y humanista",
    subtitle: "Dr. Jacinto Convit",
    paragraph: "A través de nuestra biblioteca digital",
    img: "/img/home/10001.png",
    imgAlt: "Jacinto Convit",
    buttonText: "Ir a Investigaciones",
    url: WEBSITEROUTES.RESEARCH,
  },
];

const HomeCarousel = () => {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <article className="hero-article">
            <img className="hero-img" src={slide.img} alt={slide.imgAlt} />
            <Carousel.Caption>
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <h3>{slide.subtitle}</h3>
                <p>{slide.paragraph}</p>
                <Link className="btn btn-secondary" to={WEBSITEROUTES.BIO}>
                  {slide.buttonText}
                </Link>
              </div>
            </Carousel.Caption>
          </article>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
