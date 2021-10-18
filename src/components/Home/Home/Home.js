import React from 'react';
import Banner from '../Banner/Banner';
import BlogPosts from '../Blog-posts/BlogPosts';
import Care from '../Care/Care';
import Section from '../Section/Section';
import Services from '../Services/Services';
import Specialists from '../Specialists/Specialists';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BlogPosts></BlogPosts>
      <Specialists></Specialists>
      <Section></Section>
      <Care></Care>
    </div>
  );
};

export default Home;

