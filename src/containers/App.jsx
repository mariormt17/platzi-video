import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss'
import Header from '../components/Header'
import Search from '../components/Search';
import Carousel from '../components/ Carousel';
import Category from '../components/Category';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const videos = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist.length > 0 &&
        <Category title="My List">
          <Carousel>
            {videos.mylist.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Category>
      }
      <Category title="Trending">
        <Carousel>
          {videos.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Category>
      <Category title="Originals">
        <Carousel>
        {videos.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Category>
      <Footer />
    </div>
  );
}

export default App;