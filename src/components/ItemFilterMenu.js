import React from 'react';
import Filter from './Filter';
import '../styles/ItemFilterMenu.sass'

const ItemFilterMenu = ({ categories, brands, sale, colors, screen }) => {
  return (
    <div id='ItemFilterMenu'>
      {categories && <Filter data={categories} />}
      {brands && <Filter data={brands} />}
      <div id='price'>
        <p>Precio</p>
        <input type='text' placeholder='Desde' /> -
        <input type='text' placeholder='Hasta' />
        <button>OK</button>
      </div>
      {sale && <Filter data={sale} />}
      {colors && <Filter data={colors} />}
      {screen && <Filter data={screen} />}
    </div>
  );
};

ItemFilterMenu.defaultProps = {
  categories: {
    section: 'Categorias',
    options: ['LED', 'QLED', 'Accesorios'],
  },
  brands: {
    section: 'Marcas',
    options: ['Aiwa', 'Argom', 'Samsung', 'Sony', 'LG'],
  },
  sale: {
    section: 'Especiales',
    options: ['Sale'],
  },
  colors: {
    section: 'color',
    options: ['Negro'],
  },
  screen: {
    section: 'Tipo de pantalla',
    options: ['LED', 'QLED'],
  },
};
export default ItemFilterMenu;
