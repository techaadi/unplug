* {
   box-sizing: border-box;
}
 .wolv-slider {
   width: 95%;
   position: relative;
   max-width: 800px;
   margin: auto;
   background: #fff;
   box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
   padding: 25px;
   border-radius: 25px;
   height: 400px;
   transition: all 0.3s;
}
 @media screen and (max-width: 992px) {
   .wolv-slider {
     max-width: 680px;
     height: 400px;
  }
}
 @media screen and (max-width: 768px) {
   .wolv-slider {
     min-height: 500px;
     height: auto;
     margin: 180px auto;
  }
}
 @media screen and (max-height: 500px) and (min-width: 992px) {
   .wolv-slider {
     height: 350px;
  }
}
 .wolv-slider__item {
   display: flex;
   align-items: center;
}
 @media screen and (max-width: 768px) {
   .wolv-slider__item {
     flex-direction: column;
  }
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__img img {
   opacity: 1;
   transition-delay: 0.3s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > * {
   opacity: 1;
   transform: none;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(1) {
   transition-delay: 0.3s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(2) {
   transition-delay: 0.4s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(3) {
   transition-delay: 0.5s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(4) {
   transition-delay: 0.6s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(5) {
   transition-delay: 0.7s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(6) {
   transition-delay: 0.8s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(7) {
   transition-delay: 0.9s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(8) {
   transition-delay: 1s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(9) {
   transition-delay: 1.1s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(10) {
   transition-delay: 1.2s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(11) {
   transition-delay: 1.3s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(12) {
   transition-delay: 1.4s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(13) {
   transition-delay: 1.5s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(14) {
   transition-delay: 1.6s;
}
 .wolv-slider__item.swiper-slide-active .wolv-slider__content > *:nth-child(15) {
   transition-delay: 1.7s;
}
 .wolv-slider__img {
   width: 295px;
   flex-shrink: 0;
   height: 295px;
   border-radius: 20px;
   transform: translateX(-80px);
   overflow: hidden;
}
 .wolv-slider__img:after {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   border-radius: 20px;
   opacity: 0.8;
}
 .wolv-slider__img img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   display: block;
   opacity: 0;
   border-radius: 20px;
   transition: all 0.3s;
}
 @media screen and (max-width: 768px) {
   .wolv-slider__img {
     transform: translateY(-50%);
     width: 90%;
  }
}
 @media screen and (max-width: 576px) {
   .wolv-slider__img {
     width: 95%;
  }
}
 @media screen and (max-height: 500px) and (min-width: 992px) {
   .wolv-slider__img {
     height: 270px;
  }
}
 .wolv-slider__content {
   padding-right: 25px;
}
 @media screen and (max-width: 768px) {
   .wolv-slider__content {
     margin-top: -80px;
     text-align: center;
     padding: 0 30px;
  }
}
 @media screen and (max-width: 576px) {
   .wolv-slider__content {
     padding: 0;
  }
}
 .wolv-slider__content > * {
   opacity: 0;
   transform: translateY(25px);
   transition: all 0.4s;
}
 .wolv-slider__date {
   color: #7b7992;
   margin-bottom: 15px;
   display: block;
   font-weight: 500;
}
 .wolv-slider__title {
   font-size: 24px;
   font-weight: 700;
   color: #0d0925;
   margin-bottom: 20px;
}
 .wolv-slider__text {
   color: #4e4a67;
   margin-bottom: 30px;
   line-height: 1.5em;
}
 .wolv-slider__button {
   display: inline-flex;
   background-image: linear-gradient(90deg, #273EFE 35%, #00d4ff 100%);
   padding: 15px 35px;
   border-radius: 50px;
   color: #fff;
   box-shadow: 0px 1px 10px rgba(39, 62, 254, 1);
   text-decoration: none;
   font-weight: 500;
   justify-content: center;
   text-align: center;
   letter-spacing: 1px;
}
 @media screen and (max-width: 576px) {
   .wolv-slider__button {
     width: 100%;
  }
}
 .wolv-slider .swiper-container-horizontal > .swiper-pagination-bullets, .wolv-slider .swiper-pagination-custom, .wolv-slider .swiper-pagination-fraction {
   bottom: 10px;
   left: 0;
   width: 100%;
}
 .wolv-slider__pagination {
   position: absolute;
   z-index: 21;
   right: 20px;
   width: 11px !important;
   text-align: center;
   left: auto !important;
   top: 50%;
   bottom: auto !important;
   transform: translateY(-50%);
}
 @media screen and (max-width: 768px) {
   .wolv-slider__pagination {
     transform: translateX(-50%);
     left: 50% !important;
     top: 205px;
     width: 100% !important;
     display: flex;
     justify-content: center;
     align-items: center;
  }
}
 .wolv-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
   margin: 8px 0;
}
 @media screen and (max-width: 768px) {
   .wolv-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
     margin: 0 5px;
  }
}
 .wolv-slider__pagination .swiper-pagination-bullet {
   width: 11px;
   height: 11px;
   display: block;
   border-radius: 10px;
   background: #273EFE;
   opacity: 0.2;
   transition: all 0.3s;
}
 .wolv-slider__pagination .swiper-pagination-bullet-active {
   opacity: 1;
   background: #273EFE;
   height: 30px;
   box-shadow: 0px 0px 2px rgba(39, 62, 254, 1);
}
 @media screen and (max-width: 768px) {
   .wolv-slider__pagination .swiper-pagination-bullet-active {
     height: 11px;
     width: 30px;
  }
}
 
