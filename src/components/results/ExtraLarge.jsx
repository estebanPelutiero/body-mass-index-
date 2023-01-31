import React from 'react'

const ExtraLarge = () => {
  return (
    <div className='info-card'>

      <div className='left-header'>Obesidad</div>  

      <div className='img-container'>

        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675183782/body-mass-index/saludable_keanwe.png" alt="hat" className='img'/>
        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675184986/body-mass-index/corriendo_yapsum.png" alt="correr" className='img' />

      </div>

      <div className='info-container'>

        <p>Cuidado, la obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía.</p>

      </div>

    </div>
  )
}

export default ExtraLarge;