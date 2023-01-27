import React from 'react'

const Form = () => {

  return (

        <form className='form'>

            <label>Estatura en cm</label>
            <input type="text" className='input'/>

            <label>Peso en kg</label>
            <input type="text" className='input'/>

            <div className='result'>
                <button className='button'>Calcular</button>
                <label>Resultado</label>
            </div>

        </form>

  );

}

export default Form;