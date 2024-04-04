import React, { useState } from 'react';
import '../styles/Body.css';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imgUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127795/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Main%20Banner/PCP_LP_NC_16May2023_wc0ksd.png?tr=w-2048',
      caption: 'Laptop 1',
    },
    {
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UhX0VlcY2WUH2u2Q07SDIzHf9BWj2n6swaM7FgDWBM44e7VR',
      caption: 'Laptop 2',
    },
    {
      imgUrl: 'https://www.360training.com/sites/360training/files/2022-11/360_696-3_Carousel_Active-Shooter_Desktop-Front.png',
      caption: 'Laptop 3',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="carousel" style={{ height: '500px', width: '100%' }}>
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'slide active' : 'slide'}
            style={{ backgroundImage: `url(${slide.imgUrl})` }}
          >
            <div className="caption">{slide.caption}</div>
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="indicators">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'indicator active' : 'indicator'}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}


export default Carousel;