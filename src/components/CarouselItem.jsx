import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => {
  return (
    <div className="carousel-item">
      <img src="" alt="" className="carousel-item__img" />
      <div className="carousel-item__details">
        <div>
          <img src="" alt="" className="carousel-item__details--img" />
          <img src="" alt="" className="carousel-item__details--img" />
        </div>
        <p className="carousel-item__details--title"></p>
        <p className="carousel-item__details--subtitle"></p>
      </div>
    </div>
  );
};

export default CarouselItem;