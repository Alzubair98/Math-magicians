import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, addNewObject] = useState({ total: null, next: null, operation: null });

  const result = (event) => {
    const newObject = calculate(obj, event.target.textContent);
    addNewObject(newObject);
  };

  return (
    <div className="calculator_container">
      <div className="result_div">{obj.next || obj.total || 0}</div>
      <div className="first_row">
        <button type="button" className="button" onClick={result}>AC</button>
        <button type="button" className="button" onClick={result}>+/-</button>
        <button type="button" className="button" onClick={result}>%</button>
        <button type="button" className="button operation_button" onClick={result}>+</button>
      </div>
      <div className="first_row">
        <button type="button" className="button" onClick={result}>7</button>
        <button type="button" className="button" onClick={result}>8</button>
        <button type="button" className="button" onClick={result}>9</button>
        <button type="button" className="button operation_button" onClick={result}>x</button>
      </div>
      <div className="first_row">
        <button type="button" className="button" onClick={result}>4</button>
        <button type="button" className="button" onClick={result}>5</button>
        <button type="button" className="button" onClick={result}>6</button>
        <button type="button" className="button operation_button" onClick={result}>-</button>
      </div>
      <div className="first_row">
        <button type="button" className="button" onClick={result}>1</button>
        <button type="button" className="button" onClick={result}>2</button>
        <button type="button" className="button" onClick={result}>3</button>
        <button type="button" className="button operation_button" onClick={result}>+</button>
      </div>
      <div className="first_row">
        <button type="button" className="button zero_button" onClick={result}>0</button>
        <button type="button" className="button" onClick={result}>.</button>
        <button type="button" className="button operation_button" onClick={result}>=</button>
      </div>
    </div>

  );
};

export default Calculator;
