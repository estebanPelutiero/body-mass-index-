import React from 'react'

const ShowInfo = () => {

  return (
    <div className='showInfo'>

        <div>
            <ul className='left-list'>
                <li>Menos de 18,5</li>
                <li>18,5 ~ 24,9</li>
                <li>25.0 ~ 29,9</li>
                <li>Mayor, o = a 30</li>
            </ul>
        </div>

        <div>
            <ul className='rigth-list'>
                <li> ={'>'} Peso inferior a lo normal</li>
                <li> ={'>'} Normal</li>
                <li> ={'>'} Peso superior a lo normal</li>
                <li> ={'>'} Obesidad</li>
            </ul>
        </div>

    </div>
  );

}

export default ShowInfo;