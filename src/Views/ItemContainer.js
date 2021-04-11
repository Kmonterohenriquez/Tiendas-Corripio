import React from 'react';
import ItemContainerHeader from '../components/ItemContainerHeader';
import ItemFilterMenu from '../components/ItemFilterMenu';
import ItemCard from '../components/ItemCard';
import '../styles/ItemContainer.sass';

const ItemContainer = ({ items }) => {
  console.log('items: ', items);

  return (
    <div>
      <ItemContainerHeader />
      <div className='ItemContainer-grid container'>
        <ItemFilterMenu />
        <div className='ItemCard-grid'>
          {items.map(item => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

ItemContainer.defaultProps = {
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
    {
      id: 4,
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
    {
      id: 4,
      itemName: 'FREIDORA DE AIRE NEDOCA, CAPACIDAD 3.5 LITROS - 001',
      priceBefore: 6700,
      currentPrice: 5000,
      images: [
        'https://s.fenicio.app/f2/corrdo/catalogo/articulos/FAN-35LS_001_1_800x800_1606256518_fa3.jpg',
        'https://s.fenicio.app/f2/corrdo/catalogo/articulos/FAN-35LS_001_2_800x800_1606256518_62d.jpg',
      ],
      onSale: true,
    },
  ],
};

export default ItemContainer;
