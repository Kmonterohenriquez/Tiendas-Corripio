import React from 'react';
import { Showcase } from '../components/Showcase';
import Services from '../components/Services';
import Section from '../components/Section';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div>
      <Showcase />
      <Services />
      <Section title='Ofertas de la semana' borderTop={true} />
      <Categories title='CategorÍs descatadas' />
      <Section title='Sugeridos' />
    </div>
  );
};

export default Home;
