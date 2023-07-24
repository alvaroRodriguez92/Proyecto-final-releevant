import { useUserContext } from "../../context/UserContext";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Caroussel() {
  const { imagenCarrusel, user, fetchPerfil } = useUserContext();

  useEffect(() => {
    fetchPerfil();
  }, [user]);

  return (
    <>
      <Splide
        className="carruselContainer"
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          gap: 1,
          perPage: 1,
          pagination: true,
          arrows: true,
          autoplay: true,
          snap: true,
        }}
      >
        {imagenCarrusel.map((item, i) => {
          if (item.TIPO == 0) {
            return (
              <SplideSlide key={i} className="splide__slide">
                <img width="100%" src={`http://localhost:3000/imagenes/${item.IMG_NOMBRE}`} />
              </SplideSlide>
            );
          }
        })}
      </Splide>
    </>
  );
}
