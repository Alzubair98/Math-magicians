import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator_container">
        <div className="result_div">0</div>
        <div className="first_row">
          <div className="button">AC</div>
          <div className="button">+/-</div>
          <div className="button">%</div>
          <div className="button operation_button">+</div>
        </div>
        <div className="first_row">
          <div className="button">7</div>
          <div className="button">8</div>
          <div className="button">9</div>
          <div className="button operation_button">x</div>
        </div>
        <div className="first_row">
          <div className="button">4</div>
          <div className="button">5</div>
          <div className="button">6</div>
          <div className="button operation_button">-</div>
        </div>
        <div className="first_row">
          <div className="button">1</div>
          <div className="button">2</div>
          <div className="button">3</div>
          <div className="button operation_button">+</div>
        </div>
        <div className="first_row">
          <div className="button zero_button">0</div>
          <div className="button">.</div>
          <div className="button operation_button">=</div>
        </div>
      </div>

    );
  }
}

export default Calculator;
