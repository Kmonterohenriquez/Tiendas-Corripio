import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import '../styles/Section.sass';

const Section = props => {
  const { title, items, borderTop } = props;

  const grayBorderTop = borderTop ? 'grayBorderTop' : '';
  return (
    <div className={`Section ${grayBorderTop}`}>
      <div className='Section-container container'>
        <h3 className='title'>
          <i class='fas fa-tag'></i>
          {title}
        </h3>
        <div className='Items-grid'>
          {items.map(item => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Remove default props after this is fully working with APIs and/or databases
Section.defaultProps = {
  title: 'Section Title',
  items: [
    {
      id: 1,
      itemName: 'TELEVISOR TEC, 42" LED FHD, FLAT SMART,1920X1080 - 001',
      priceBefore: 5495,
      currentPrice: 4330,
      images: [
        'https://s.fenicio.app/f2/corrdo/catalogo/articulos/TVT-TC42NF20_001_1_800x800_1605973508_8f5.jpg',
      ],
      onSale: false,
    },
    {
      id: 2,
      itemName: 'FREIDORA DE AIRE NEDOCA, CAPACIDAD 3.5 LITROS - 001',
      priceBefore: 6700,
      currentPrice: 5000,
      images: [
        'https://s.fenicio.app/f2/corrdo/catalogo/articulos/FAN-35LS_001_1_800x800_1606256518_fa3.jpg',
        'https://s.fenicio.app/f2/corrdo/catalogo/articulos/FAN-35LS_001_2_800x800_1606256518_62d.jpg',
      ],
      onSale: true,
    },
    {
      id: 3,
      itemName: 'TELEVISOR TEC, 42" LED FHD, FLAT SMART,1920X1080 - 001',
      priceBefore: 5495,
      currentPrice: 4330,
      images: [
        'https://s.fenicio.app/f2/corrdo/catalogo/articulos/TVT-TC42NF20_001_1_800x800_1605973508_8f5.jpg',
      ],
      onSale: false,
    },
  ],
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
