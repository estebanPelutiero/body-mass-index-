import React from 'react';
import Form from './Form';
import ShowInfo from './ShowInfo';
import { useState } from 'react';

const Wrapper = () => {

  const [weigth, setWeigth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(""); 

  return (
    <>
      <div className='wrapper'>

          <Form weigth={weigth}
                setWeigth={setWeigth}
                height={height}
                setHeight={setHeight}
                result={result}
                setResult={setResult} />

          <ShowInfo result={result} />

      </div>
    </>
        
  );

}

export default Wrapper;