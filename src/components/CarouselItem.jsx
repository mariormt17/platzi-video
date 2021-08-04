import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className="carousel-item">
      <img src={cover} alt={title} className="carousel-item__img" />
      <div className="carousel-item__details">
        <div>
          <img src={playIcon} alt="Play icon" className="carousel-item__details--img" />
          <img src={plusIcon} alt="Plus icon" className="carousel-item__details--img" />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration} minutes`}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;