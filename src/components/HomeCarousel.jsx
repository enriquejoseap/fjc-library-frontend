import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { WEBSITEROUTES } from "../assets/js/routes";

const slides = [
  {
    title: "Conoce al insigne científico y humanista",
    subtitle: "Dr. Jacinto Convit",
    paragraph: "A través de nuestra biblioteca digital",
    img: "/img/hero/home-prensa.webp",
    buttonText: "Ir a Biografía",
  },
  {
    title: "Conoce al insigne científico y humanista",
    subtitle: "Dr. Jacinto Convit",
    paragraph: "A través de nuestra biblioteca digital",
    img: "/img/hero/home-jacinto.webp",
    buttonText: "Ir a Biografía",
  },
  {
    title: "Conoce al insigne científico y humanista",
    subtitle: "Dr. Jacinto Convit",
    paragraph: "A través de nuestra biblioteca digital",
    img: "/img/hero/home-lab.webp",
    imgAlt: "Jacinto Convit",
    buttonText: "Ir a Biografía",
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
