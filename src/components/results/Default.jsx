import React from 'react';

const Default = () => {

  return (
    
    <div className='info-card'>

      <div className='left-header'>Bienvenido!</div>  

      <div className='img-container'>

        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675167781/body-mass-index/hat_qhv80c.png" alt="hat" className='img'/>
        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675167781/body-mass-index/pen_m858f5.png" alt="pen" className='img'/>
        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675167781/body-mass-index/dictionary_qrvalh.png" alt="dictionary" className='img'/>

      </div>

      <div className='info-container'>

        <p>El índice de masa corporal (IMC) es el peso de una persona en kilogramos dividido por el cuadrado de la estatura en metros. El IMC es un método de evaluación fácil y económico para la categoría de peso: bajo peso, peso saludable, sobrepeso, y obesidad.</p>

      </div>

    </div>
  )
}

export default Default;