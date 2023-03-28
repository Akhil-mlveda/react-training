import React, { Component } from "react";
import InputForm from "./InputForm";
import DisplayData from "./DisplayData";
import "./formsubmitdisplay.css";

export default class FormSubmitDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  onEmployeeFormSubmit = (formDataFromInput) => {
    this.setState({ employees: [...this.state.employees, formDataFromInput] });
    // this.setState(({ employees }) => {
    //   return { employees: [...employees, formDataFromInput] };
    // });
  };

  render() {
    return (
      <div className="parentDiv">
        <InputForm onSubmit={this.onEmployeeFormSubmit} />
        <DisplayData className="DisplayData" employees={this.state.employees} />
      </div>
    );
  }
}
