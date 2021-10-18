import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Section from '../Section/Section';
import Services from '../Services/Services';
import Specialists from '../Specialists/Specialists';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Specialists></Specialists>
      <Section></Section>
      <Care></Care>
    </div>
  );
};

export default Home;

