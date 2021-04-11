import React from 'react';
import '../styles/Categories.sass';

const Categories = ({ title, sections }) => {
  return (
    <div id='Categories'>
      <div className='container'>
        <h1 className='title'>
          <i className='fas fa-heart'></i>
          {title}
        </h1>
        <div className='Sections-container'>
          {sections.map(section => (
            <div className='box'>
              <img src={section.image} alt={section.categoryName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Categories.defaultProps = {
  title: 'Section Title',
  sections: [
    {
      id: 1,
      image:
        'https://s.fenicio.app/f2/corrdo/recursos/65/thumbnails-categori-as-tienda-we_500x500_1589405735_514.png',
    },
    {
      id: 2,
      image:
        'https://s.fenicio.app/f2/corrdo/recursos/66/thumbnails-categori-as-tienda-we_500x500_1589405699_d9f.png',
    },
    {
      id: 3,
      image:
        'https://s.fenicio.app/f2/corrdo/recursos/67/thumbnails-categori-as-tienda-we_500x500_1589405647_b53.png',
    },
    {
      id: 4,
      image:
        'https://s.fenicio.app/f2/corrdo/recursos/68/thumbnails-categori-as-tienda-we_500x500_1589405603_287.png',
    },
    {
      id: 5,
      image:
        'https://s.fenicio.app/f2/corrdo/recursos/69/thumbnails-categori-as-tienda-we_500x500_1589405383_2fc.png',
    },
    {
      id: 6,
      image:
        'https://s.fenicio.app/f2/corrdo/recursos/13/bannerhomeoffice_500x500_1598283094_99c.jpg',
    },
  ],
};

export default Categories;
