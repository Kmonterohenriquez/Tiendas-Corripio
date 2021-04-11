import React from 'react';
import '../styles/ItemCard.sass';

const ItemCard = ({ item }) => {
  return (
    <div className='ItemCard' key={item.id}>
      <div className='item'>
        <img src={item.images[0]} alt={item.itemName} />
        <div className='info'>
          <h2 className='itemName'>{item.itemName}</h2>
          <p className='priceBefore'>Antes RD$ {item.priceBefore}</p>
          <p className='currentPrice'>RD$ {item.currentPrice}</p>
          <p className='taxesIncluded'>Impuestos incluidos</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
