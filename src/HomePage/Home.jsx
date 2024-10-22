import React from 'react';
import Header from '../Shared/Header';
import HeroSection from './HeroSection';
import SearchFilter from './SearchFilter';
import FeaturedModels from './FeaturedModels';
import Footer from '../Shared/Footer';



const Home=()=> {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <SearchFilter />
      <FeaturedModels />
      <Footer />
    </div>
  );
}

export default Home;
