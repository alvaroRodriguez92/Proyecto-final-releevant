import { useUserContext } from '../../context/UserContext';
import { useEffect } from 'react';
import {Box} from '@mui/material'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import academiaNuevaMalaga from '../../../../backend/public/imagenes/academia nueva malaga.png';

export default function Caroussel() {
  const { imagenCarrusel,user,fetchPerfil } = useUserContext();

  useEffect(() => {
  fetchPerfil()
  }, [user])


  return (
    <>
      <Splide
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
    {
      imagenCarrusel.map((item, i) => 
       (
          <SplideSlide >
           <img width="100%" src={`http://localhost:3000/imagenes/${item.IMG_NOMBRE}`} />
        </SplideSlide>
          
        )
        )}
        
             </Splide>
       </>
    
  )
}


