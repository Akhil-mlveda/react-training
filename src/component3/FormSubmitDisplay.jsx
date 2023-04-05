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

// import React, { useState } from "react";

// export default function FormSubmitDisplay() {
//   const [email, setEmail] = useState();
//   const [emails, setEmails] = useState();

//   const handleInput = (e) => {
//     setEmail(e.target.value);
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (email.length < 10) {

//       console.log("email address is lesser than required character");
//     } else {
//       console.log("valid input");
//     }
//   };
//   return (<form onSubmit={onSubmit}><input type="text" value={email} onChange={handleInput} />
//   <input type='submit' />
//   </form>);
// }

// import React, { useRef } from "react";

// export default function FormSubmitDisplay() {
//   // const inputRef = useRef(null);
//   // console.log(typeof(inputRef));
//   // return (
//   //   <>
//   //     <form>
//   //       <input type="text" ref={inputRef} />
//   //     </form>
//   //     <p>{inputRef}</p>
//   //   </>
//   // );

//   const inputRef = useRef(null);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Name: ${inputRef.current.value}`);
//     alert(inputRef);
//     console.log(inputRef);
//   }


//   console.log({useRef});
//   return (
//     <div className="App">
//       <h3>Uncontrolled Component</h3>
//       <form onSubmit={handleSubmit}>
//         <label>Name :</label>
//         <input type="text" name="name" ref={inputRef} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
