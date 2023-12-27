import React from 'react';
import BodyProducts from '../components/Body/BodyProducts';
import Counting from '../components/Body/Counting';
import Features from '../components/Body/Features';
import Slider from '../components/Body/Slider';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Slider />
      <Features />
      <BodyProducts />
      <Counting />
      <Footer/>
    </>
  );
}
