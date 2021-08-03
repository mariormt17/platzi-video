import React from 'react';
import '../assets/styles/components/Search.scss'
import logoColors from '../assets/static/logo-platzi-video-colors.png';

const Search = () => {
  return (
    <section className="main">
      <img className="main__logo" src={logoColors} alt="Logo Platzi Video" />
      <h2 className="main__title">What do you want to search?</h2>
      <input type="text" className="input" placeholder="Search..." />
    </section>
  );
};

export default Search;