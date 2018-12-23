import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor () {
      super();
      this.state = {
          formControls: {
              x1:'',
              x2:'',
              operation:'add'
          }
      }
  }

  changeHandler = event => {
      
      const name = event.target.name;
      const value = event.target.value;
      this.setState(state=>{
          state.formControls[name] = value;
          return state;
      })
    
  }

  formSubmitHandler = () => {
    this.props.onSubmitForm(this.state.formControls);
  }

  render() {
    return (
      <div className="form-container">
        <label className="bold">
            Operation
        </label>
        <div className="separator"></div>
        <div className="input-container">
            <input  type="number" 
                    name="x1"
                    min="0"
                    placeholder="First Number"
                    className="input-number"
                    value={this.state.formControls.x1}
                    onChange={this.changeHandler}
            />
            {(this.state.formControls.operation == "fac") ? 
            <input  type="number" 
            name="x2"
            min="0"
            placeholder="Second Number"
            className="input-number"
            value={this.state.formControls.x2}
            onChange={this.changeHandler}
            disabled
            /> :
            <input  type="number" 
                    name="x2"
                    min="0"
                    placeholder="Second Number"
                    className="input-number"
                    value={this.state.formControls.x2}
                    onChange={this.changeHandler}
            />
            }
            <select className="input-dropdown" name="operation" value={this.state.formControls.operation} onChange={this.changeHandler}>
                <option value="add">Additional</option>
                <option value="sub">Subtractional</option>
                <option value="mult">Multiplication</option>
                <option value="div">Division</option>
                <option value="fac">Factorial</option>
            </select>
            {(this.props.isAnimate) ? 
            <button onClick={this.formSubmitHandler} className="input-button" disabled>Hitung</button > : 
            <button onClick={this.formSubmitHandler} className="input-button">Hitung</button>}
        </div>
      </div>
    );
  }
}

export default Form;
