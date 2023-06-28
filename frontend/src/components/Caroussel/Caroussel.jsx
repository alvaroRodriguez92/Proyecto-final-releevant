<section id="image-carousel" class="splide" aria-label="Beautiful Images">
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
				<img src="image01.jpg" alt="">
			</li>
			<li class="splide__slide">
				<img src="image02.jpg" alt="">
			</li>
			<li class="splide__slide">
				<img src="image03.jpg" alt="">
			</li>
		</ul>
  </div>
</section>









































// import { useUserContext } from '../../context/UserContext';
// import React, { Component } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';



// useEffect(() => {
//   fetchPerfil()
// },[imagenCarrusel])


// const items = [
//   {
//     src={`http://localhost:3000/imagenes/${imagenCarrusel[1].IMG_NOMBRE}`},
//     altText: 'imagen1',
//     caption: 'mente'
//   },
//   {
//     src={`http://localhost:3000/imagenes/${imagenCarrusel[2].IMG_NOMBRE}`},
//     altText: 'imagen1',
//     caption: 'mente'
//   },
//   {
//     src={`http://localhost:3000/imagenes/${imagenCarrusel[3].IMG_NOMBRE}`},
//     altText: 'imagen1',
//     caption: 'mente'
//   },

// ];

// class Caroussel extends Component {
//   constructor(props) {
//     const [imagenCarrusel] = useUserContext();
//     console.log(imagenCarrusel,"imagenCarrusel");
//     super(props);
//     this.state = { activeIndex: 0 };
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }

  
  
//   onExiting() {
//     this.animating = true;
//   }

//   onExited() {
//     this.animating = false;
//   }
//   next() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === this.props.imagenCarrusel.length - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   previous() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === 0 ? this.props.imagenCarrusel.length - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }

//   render() {

//     const { activeIndex } = this.state;

//     const slides = this.props.imagenCarrusel.map((item, i) => {
     
      
//       if (i !== 0) {
//         return (
       
//           <CarouselItem
//             onExiting={this.onExiting}
//             onExited={this.onExited}
//             key={i}
//           >
//             <img width="100%" src={`http://localhost:3000/imagenes/${item.IMG_NOMBRE}`} alt={item.IMG_NOMBRE} />
//             <CarouselCaption captionText={"mente"} captionHeader={"mente"} />
//             </CarouselItem>
          
//         );
//       }
//       });
//       console.log(imagenCarrusel,"imagenCarrusel");
//   return(
//       <Carousel
//         activeIndex = { activeIndex }
//         next = { this.next }
//         previous = { this.previous }
//       >
//       <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//         { slides }
//         <CarouselControl direction = "prev" directionText = "Previous" onClickHandler = { this.previous } />
//       <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//       </Carousel>
//     );
//   }
// }


// export default Caroussel;