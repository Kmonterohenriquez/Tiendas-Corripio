import React from 'react';
import '../styles/Footer.sass';

const Footer = props => {
  const { socialMedia } = props;
  return (
    <div id='Footer'>
      <div className='container'>
        <div id='subscribe-container'>
          <h2 className='title'>SuscrÍbete a nuestro boletÍn</h2>
          <div className='input-container'>
            <input type='text' placeholder='Ingresa tu e-mail' />
            <button>Suscribirme</button>
          </div>
          <div className='social-media-container'>
            {socialMedia.map(curr => (
              <div className={`box ${curr.socialMedia}`} key={curr.id}>
                <i className={curr.icon}></i>
              </div>
            ))}
          </div>
        </div>
        <div className='down-side-container'>
          <div className='menu-container'>
            <ul>
              <li className='list-title'>Corripio</li>
              <li>La empresa</li>
              <li>Contacto</li>
              <li>Sucursales</li>
              <li>Trabaja con nosotros</li>
            </ul>
            <ul>
              <li className='list-title'>Comprar</li>
              <li>Como comprar</li>
              <li>Envíos y devoluciones</li>
              <li>Preguntas frecuentes</li>
              <li>Políticas de Uso</li>
              <li>Políticas de privacidad</li>
              <li>Políticas de Seguridad</li>
            </ul>
            <ul>
              <li className='list-title'>Mi cuenta</li>
              <li>Mi cuenta</li>
              <li>Mis compras</li>
              <li>Mis direcciones</li>
              <li>Wish list</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  socialMedia: [
    {
      id: 1,
      socialMedia: 'facebook',
      icon: 'fab fa-facebook-f',
    },
    {
      id: 2,
      socialMedia: 'twitter',
      icon: 'fab fa-twitter',
    },
    {
      id: 3,
      socialMedia: 'youtube',
      icon: 'fab fa-youtube',
    },
    {
      id: 4,
      socialMedia: 'instagram',
      icon: 'fab fa-instagram',
    },
  ],
};

export default Footer;
