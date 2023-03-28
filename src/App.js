import React, { Component } from "react";
// import Counter from "./component1/Counter.jsx";
// import InputComponent from "./component1/InputComponent"
// import InputForm from "./component2/InputForm";
import FormSubmitDisplay from "./component3/FormSubmitDisplay";
import './App.css';

export class App extends Component {
  render() {
    return (
      <>
        {/* <InputForm /> */}
        <FormSubmitDisplay />
        {/* <Counter /> */}
        {/* <InputComponent defaultText="Akhil" /> */}
       
      </>
    );
  }
}

export default App;
