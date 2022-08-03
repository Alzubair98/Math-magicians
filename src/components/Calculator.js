import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.result = this.result.bind(this);
  }

  result(e) {
    const { obj } = this.state;
    const newObject = calculate(obj, e.target.textContent);
    this.setState({ obj: newObject });
  }

  render() {
    const { obj } = this.state;
    return (
      <div className="calculator_container">
        <div className="result_div">{obj.next || obj.total || 0}</div>
        <div className="first_row">
          <button type="button" className="button" onClick={this.result}>AC</button>
          <button type="button" className="button" onClick={this.result}>+/-</button>
          <button type="button" className="button" onClick={this.result}>%</button>
          <button type="button" className="button operation_button" onClick={this.result}>+</button>
        </div>
        <div className="first_row">
          <button type="button" className="button" onClick={this.result}>7</button>
          <button type="button" className="button" onClick={this.result}>8</button>
          <button type="button" className="button" onClick={this.result}>9</button>
          <button type="button" className="button operation_button" onClick={this.result}>x</button>
        </div>
        <div className="first_row">
          <button type="button" className="button" onClick={this.result}>4</button>
          <button type="button" className="button" onClick={this.result}>5</button>
          <button type="button" className="button" onClick={this.result}>6</button>
          <button type="button" className="button operation_button" onClick={this.result}>-</button>
        </div>
        <div className="first_row">
          <button type="button" className="button" onClick={this.result}>1</button>
          <button type="button" className="button" onClick={this.result}>2</button>
          <button type="button" className="button" onClick={this.result}>3</button>
          <button type="button" className="button operation_button" onClick={this.result}>+</button>
        </div>
        <div className="first_row">
          <button type="button" className="button zero_button" onClick={this.result}>0</button>
          <button type="button" className="button" onClick={this.result}>.</button>
          <button type="button" className="button operation_button" onClick={this.result}>=</button>
        </div>
      </div>

    );
  }
}

export default Calculator;
