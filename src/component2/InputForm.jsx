// import React, { Component } from "react";

// export default class InputForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       fullName: "",
//       email: "",
//       age: "",
//       formData: [],
//       // showData:false,
//     };
//   }
//   onInputChange = (event) => {
//     event.preventDefault();
//     let changedKey = event.target.name;
//     let changedValue = event.target.value;
//     this.setState({ [changedKey]: changedValue });
//   };

//   onFormSubmitHandler = (event) => {
//     event.preventDefault();
//     // // this.setState({ showData: true });
//     // this.props.onSubmit(this.state);
//     // this.setState({ submitted: true });

//     const { fullName, email, age, formData } = this.state;
//     const newFormData = { fullName, email, age };
//     this.setState({ formData: [...formData, newFormData] });
//     this.props.onFormDataUpdate(this.state.formData);
//     // this.setState({ fullName: '', email: '', age: '' });
//   };

//   render() {
//     // const { fullName, email, age, formData } = this.state;
//     // console.log( this.state.formData);

//     // console.log(this.state);
//     return (
//       <>
//         <div>
//           <form onSubmit={this.onFormSubmitHandler}>
//             {/* <form> */}
//             <label htmlFor="fullName">FullName</label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               placeholder="Enter your Name"
//               value={this.state.fullName}
//               onChange={this.onInputChange}
//             ></input>
//             <br />

//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your Email-Address"
//               value={this.state.email}
//               onChange={this.onInputChange}
//             ></input>
//             <br />

//             <label htmlFor="age">Enter your Age</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               placeholder="Enter your Age"
//               value={this.state.age}
//               onChange={this.onInputChange}
//             ></input>
//             <br />

//             <input type="submit" />
//             {/* <button type="submit" >Submit</button> */}
//           </form>
//         </div>

//         {/* <div>
//           <h2>Submitted Data:</h2>
//           <ul>
//             {formData? formData.map((data, index) => (
//               <li key={index}>
//                 <p>fullName: {data.fullName}</p>
//                 <p>Email: {data.email}</p>
//                 <p>Age: {data.age}</p>
//               </li>
//             )) : console.log("data not present ")}
//           </ul>
//         </div> */}
//       </>
//     );
//   }
// }

import React, { Component } from "react";
import "./InputForm.css";

export default class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      age: "",
      title: "",
    };
  }
  onInputChange = (event) => {
    event.preventDefault();
    let changedKey = event.target.name;
    let changedValue = event.target.value;

    this.setState({ [changedKey]: changedValue });
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    // // this.setState({ showData: true });
    // this.props.onSubmit(this.state);
    // this.setState({ submitted: true });

    const { fullName, email, age, title } = this.state;
    const newFormData = { fullName, email, age, title };
    // this.props.setState({ formData: [...formData, newFormData] });
    this.props.onSubmit(newFormData);
    this.setState({ fullName: "", email: "", age: "", title: "" });
  };

  render() {
    // const { fullName, email, age, formData } = this.state;
    // console.log( this.state.formData);

    // console.log(this.state);
    return (
      <>
        <div className="mainDiv">
          <div className="mainForm">
            <form className="formClass" onSubmit={this.onFormSubmitHandler}>
              {/* <form> */}
              <div className="labelInput">
                <label htmlFor="fullName">FullName</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your Name"
                  value={this.state.fullName}
                  onChange={this.onInputChange}
                ></input>
              </div>
              {/* <br /> */}

              <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email-Address"
                  value={this.state.email}
                  onChange={this.onInputChange}
                ></input>
              </div>
              {/* <br /> */}

              <div className="labelInput">
                <label htmlFor="age">Enter your Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter your Age"
                  value={this.state.age}
                  onChange={this.onInputChange}
                ></input>
              </div>
              {/* <br /> */}

              <input type="submit" />
              {/* <button type="submit" >Submit</button> */}
            </form>
          </div>
        </div>

        {/* <div>
          <h2>Submitted Data:</h2>
          <ul>
            {formData? formData.map((data, index) => (
              <li key={index}>
                <p>fullName: {data.fullName}</p>
                <p>Email: {data.email}</p>
                <p>Age: {data.age}</p>
              </li>
            )) : console.log("data not present ")}
          </ul>
        </div> */}
      </>
    );
  }
}
