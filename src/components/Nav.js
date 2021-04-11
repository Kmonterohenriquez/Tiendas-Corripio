import React from 'react';
import '../styles/Nav.sass';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='Nav-container container'>
        <nav>
          <ul>
            <li className='main-menu-option'>
              Línea blanca
              <ul className='sub-unorder-list'>
                <li>Aires</li>
                <li>Estufas</li>
                <li>Extractores</li>
                <li>hornos</li>
                <li>microhondas</li>
                <li></li>
              </ul>
            </li>
            <li className='main-menu-option'>
              <Link to='/televitions'>Televisiones</Link>
            </li>
            <li className='main-menu-option'>Audio</li>
            <li className='main-menu-option'>Tecnología</li>
            <li className='main-menu-option'>Pequeños Electrodomésticos</li>
            <li className='main-menu-option'>Eléctricos</li>
          </ul>
        </nav>
        <div className='cart'>
          <i className='fas fa-shopping-cart'></i>
          <p id='cart-amount'>RD$ 0</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
