import React, { Component } from "react";
// import Counter from "./component1/Counter.jsx";
import InputComponent from "./component1/InputComponent"

export class App extends Component {
  render() {
    return (
      <>
        <div>App</div>
        {/* <Counter /> */}
        <InputComponent defaultText={"Akhil"} />
       
      </>
    );
  }
}

export default App;
