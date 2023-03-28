import React, { Component } from "react"
import DisplayInput from "./DisplayInput.jsx"

export default class InputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: this.props.defaultText ?? "",
    };
  }

  onInputChange = (event) =>{
    let changedInput = event.target.value;
    this.setState({
        inputText : changedInput,
    })
  };
  
  render() {
    console.log(this.state.inputText);
    return (
      <>
        <label htmlFor="inputText"> Enter your text </label>
        <input
          type="text"
          id="inputText"
          name="inputText"
          placeholder="Enter your text"
          value={this.state.inputText}
          onChange = {this.onInputChange}
        />

        <DisplayInput text={this.state.inputText} />
      </>
    );
  }
}