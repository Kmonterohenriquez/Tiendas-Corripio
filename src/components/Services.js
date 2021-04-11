import React from 'react'
import '../styles/Services.sass'

const Services = () => {

  const services = [
    {
      id: 1,
      title: 'TRANSPORTE E INSTALACIÓN',
      description:
        'Gratis en todas nuestras ofertas. Dentro del área de cobertura',
      image:
        'https://s.fenicio.app/assets/commerce/www.tiendascorripio.com.do/113f_9c99/public/web/img/camion.svg',
    },
    {
      id: 2,
      title: 'GARANTÍA COMPLEMENTARIA',
      description:
        'Conoce los planes de garantía extendida que tenemos para ti',
      image:
        'https://s.fenicio.app/assets/commerce/www.tiendascorripio.com.do/3314_605c/public/web/img/cocarda.svg',
    },
    {
      id: 3,
      title: 'CRÉDITO ESCALA',
      description: 'Calcula las cuotas que vas a pagar por nuestros productos',
      image:
        'https://s.fenicio.app/assets/commerce/www.tiendascorripio.com.do/a605_2b95/public/web/img/calculadora.svg',
    },
  ].map(service=> (
    <div className='Service'>
      <img src={service.image} alt={service.title}/>
      <div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  ));
  
  return (
    <div className='Services container'>
      {services}
    </div>
  )
}

export default Services
