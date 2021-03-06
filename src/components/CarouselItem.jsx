import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration, source }) => {
  return (
    <div className="carousel-item">
      <img src={cover} alt={title} className="carousel-item__img" />
      <div className="carousel-item__details">
        <div>
          <a href={source}>
            <img
              src={playIcon}
              alt="Play icon"
              className="carousel-item__details--img"
            />
          </a>
          <img
            src={plusIcon}
            alt="Plus icon"
            className="carousel-item__details--img"
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration} minutes`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  source: PropTypes.string
}

export default CarouselItem;