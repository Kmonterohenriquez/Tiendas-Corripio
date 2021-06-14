import React from 'react';
import '../styles/Upperline.sass';
import { Link } from 'react-router-dom';

const Upperline = () => {
  return (
    <div className='Upperline'>
      <div className='Upperline-container container'>
        <div>
          <p id='phone-number'>
            <i className='fas fa-phone-alt'></i>Llámanos al 809-227-3200
          </p>
          <p>Lunes a viernes 8:00 A.M. a 6:00 P.M.</p>
        </div>
        <nav>
          <ul>
            <Link to=''>
              <i className='fas fa-user'></i> Mi cuenta
            </Link>
            <Link to=''>Tiendas</Link>
            <Link to=''>Contacto</Link>
            <Link id='addItem' to='/add-new-item'>Add Item</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Upperline;
