import React from "react";

const Form = ({ weigth, setWeigth, height, setHeight, result, setResult }) => {

  const handleWeigth = (e) => {
    setWeigth(e.target.value);
  }
 
  const handleHeigth = (e) => {
    setHeight(e.target.value);
  }

  const formSubmit = (e) => {

    e.preventDefault();

    setResult((weigth / (height / 100) ** 2).toFixed(1));

    setHeight("");
    setWeigth("");

    return +result;
  
  }

  return (

    <>
      <form onSubmit={ formSubmit } className="form">

        <h1>Calculadora de índice de masa corporal</h1>

        <label className="form-label">Estatura en cm</label>

        <input type="text"
               className="input"
               value={height}
               onChange={handleHeigth}
               required />

        <label className="form-label">Peso en kg</label>

        <input type="text"
               className="input"
               value={weigth}
               onChange={handleWeigth}
               required />

        <div className="result">
          
          <button className="button">Calcular</button>
          {result ? <label className="form-label">{result}</label> : ""}
          
        </div>

      </form>

    </>
  );
};

export default Form;
