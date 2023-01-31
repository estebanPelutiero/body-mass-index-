import React from 'react'

const Large = () => {
  return (
    <div className='info-card'>

      <div className='left-header'>Sobrepeso</div>  

      <div className='img-container'>

        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675167781/body-mass-index/edibles_gc62od.png" alt="food" className='img'/>
        <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1675184767/body-mass-index/vegetables_trwy8m.png" alt="vegetables" className='img'/>

      </div>

      <div className='info-container'>

        <p>Una mala alimentación y hábitos sedentarios pueden contribuir a acumular grasa en tu cuerpo, lo que puede llevar a problemas médicos en el futuro.</p>

      </div>

    </div>
  )
}

export default Large;