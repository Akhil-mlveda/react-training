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
        <label for="inputText"> Enter your text </label>
        <input
          type="text"
          id="inputText"
          name="inputText"
          placeholder="Enter your text"
          value={this.state.inputText}
          onChange = {this.onInputChange}
        />

        <DisplayInput text = {this.state.inputText} />
      </>
    );
  }
}
// import React, { Component } from 'react'

// export class InputComponent extends Component {
//   render() {
//     return (
//       <div>InputComponent</div>
//     )
//   }
// }

// export default InputComponent
