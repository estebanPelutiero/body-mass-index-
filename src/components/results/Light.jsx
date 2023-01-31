import React from 'react'

const Light = () => {
  
  return (
    <div className='info-card'>

      <div className='left-header'>Bajo peso</div>  

      <div className='img-container'>

        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675167781/body-mass-index/watermelon_z6mufk.png" alt="watermelon" className='img'/>
        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675167781/body-mass-index/avocado_qdqzv7.png" alt="avocado" className='img'/>

      </div>

      <div className='info-container'>

        <p>La delgadez puede deberse a diversos factores, tales como genéticos y dietéticos. Independiente de su causa, es importante para tu bienestar mantener un peso saludable.</p>

      </div>

    </div>
  )
}

export default Light;