import Carousel from "react-bootstrap/Carousel";

export default function Caroussel() {
  let images = [
    { nombre: "ganaderia", src: "../../src/assets/ganaderia.jpg" },
    { nombre: "pesca", src: "../../src/assets/pesca.jpg" },
    {
      nombre: "explotacion forestal",
      src: "../../src/assets/xplotacion forestal.png",
    },
  ];
  return (
    <>
      <Carousel>
        {images?.map((image) => (
          <Carousel.Item>
            <img className="imagen-slider" src={image.src} alt="Second slide" />
            <Carousel.Caption>
              <h3>Las mejores peliculas del 2023</h3>
              <p>a un boton de tenerlas en casa</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
