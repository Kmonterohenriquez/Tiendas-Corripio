import React from 'react';
import '../styles/ItemContainerHeader.sass';

const ItemContainerHeader = ({ title }) => {
  return (
    <div id='Header'>
     <div className='Header-container container'>
        <h2>{title}</h2>
        <div className='right-side'>
          <p>31 artículos</p>
          <select name='' id='' placeholder='Ordenar'>
            <option value='rec'>Recomendados</option>
            <option value='new'>Recientes</option>
            <option value=''>Categoría</option>
            <option value=''>Menor precio</option>
            <option value=''>Mayor precio</option>
            <option value='dis'>Mayor descuento</option>
          </select>
        </div>
     </div>
    </div>
  );
};

ItemContainerHeader.defaultProps = {
  title: 'Title section',
};

export default ItemContainerHeader;
