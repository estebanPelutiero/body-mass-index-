import React from 'react'

const Normal = () => {
  return (
    <div className='info-card'>

      <div className='left-header'>Peso saludable</div>  

      <div className='img-container'>

        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675167781/body-mass-index/water_drijsi.png" alt="hat" className='img'/>
        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675184181/body-mass-index/loto_imsnbd.png" alt="loto" className='img'/>

      </div>

      <div className='info-container'>

        <p>El equilibrio del organismo -su homeostasis- se obtiene con mayor facilidad si el peso de una persona es normal. Una dieta balanceada y ejercicio ayudan a mantenerse en esta categoría.</p>

      </div>

    </div>
  )
}

export default Normal;