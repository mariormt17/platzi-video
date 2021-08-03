import React from 'react';
import '../assets/styles/App.scss'
import Header from '../components/Header'
import Search from '../components/Search';
import Carousel from '../components/ Carousel';
import Category from '../components/Category';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Category title="My List">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Category>
      <Category title="Popular">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Category>
      <Category title="Newest">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Category>
      <Footer />
    </div>
  );
}
export default App;