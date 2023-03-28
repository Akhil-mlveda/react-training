// import React, { Component } from "react";
// import InputForm from "./InputForm";
// import DisplayData from "./DisplayData";

// export default class FormSubmitDisplay extends Component {
//     constructor(props){
//         super(props);

//         this.state ={

//         };
//     }
//   render() {
//     return (
//       <>
//         <InputForm onSubmit={this.state} />
//         {this.state && <DisplayData formData={this.state} />}
//         {/* <div>{this.state.showName && <p>Name: {this.state.firstName}</p>}</div> */}
//       </>
//     );
//   }
// }

// import React, { Component } from "react";
// import InputForm from "./InputForm";
// import DisplayData from "./DisplayData";

// export default class FormSubmitDisplay extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         submitted: false,
//       };
//     }

//     handleFormSubmit = (formData) => {
//       this.setState({ formData, submitted: true });
//     }

//     render() {
//       return (
//         <div>
//           <InputForm onSubmit={this.handleFormSubmit} />
//           {this.state.submitted && <DisplayData formData={this.state.formData} />}
//         </div>
//       );
//     }
//   }

// import React,{Component} from 'react';
// // import InputComponent from '../component1/InputComponent';
// import InputForm from './InputForm';
// import DisplayData from './DisplayData';

// export default class FormSubmitDisplay extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: []
//     };
//   }

//   handleFormDataUpdate = (formDataFromInput) => {
//     this.setState({formData : [this.state.formData.push(formDataFromInput)]});
//     console.log(this.state.formData);
//   }

//   render() {
//     // const { formData } = this.state;
//     // console.log("FormSubmitDisplay" + this.state.formData);
//     return (
//       <div>
//         <InputForm onFormDataUpdate={this.handleFormDataUpdate} />
//         <DisplayData formData={this.state.formData} />
//       </div>
//     );
//   }
// }


import React, { Component } from "react";
// import InputComponent from '../component1/InputComponent';
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

  // handleFormDataUpdate = (formDataFromInput) => {
  //   this.setState(this.state.formData.push(formDataFromInput));

  // }

  onEmployeeFormSubmit = (formDataFromInput) => {
    this.setState({ employees: [...this.state.employees, formDataFromInput] });
    // this.setState(({ employees }) => {
    //   return { employees: [...employees, formDataFromInput] };
    // });
  };

  render() {
    // const { formData } = this.state;
    // console.log("FormSubmitDisplay" + this.state.formData);
    return (
      <div className="perentDiv">
        <InputForm onSubmit={this.onEmployeeFormSubmit} />
        <DisplayData className="DisplayData" employees={this.state.employees} />
      </div>
    );
  }
}
