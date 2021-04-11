import React from 'react';
import '../styles/Header.sass';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='Header container'>
      <Link to='/'>
        <img
          src='https://s.fenicio.app/assets/commerce/www.tiendascorripio.com.do/28e8_dfc2/public/web/img/logo.svg'
          alt='Corripio Logo'
        />
      </Link>
      <div className='search-container'>
        <input type='text' placeholder='Buscar productos...' />
        <i className='fas fa-search'></i>
      </div>
    </div>
  );
};

export default Header;
