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
      gender: "",
      hobbies: [],
      states: "",
      address: "",
      pwd: "",
      error: "",
    };
  }
  onInputChange = (event) => {
    event.preventDefault();
    let changedKey = event.target.name;
    let changedValue = event.target.value;
    this.setState({ [changedKey]: changedValue });
    // if (
    //   changedKey === "fullName" &&
    //   changedValue.trimStart().length <= 4 &&
    //   typeof parseInt(changedValue) != "string"
    // ) {
    //   this.setState({ error: "Enter valid name" });
    //   document.getElementById(
    //     "fullNameError"
    //   ).innerHTML = `<p>${this.state.error}</p>`;
    // } else {
    //   this.setState({ error: "" });
    //   document.getElementById(
    //     "fullNameError"
    //   ).innerHTML = `<p>${this.state.error}</p>`;
    // }
    // this.setState({ error: "Enter valid name" });

    // if (
    //   changedKey === "email" &&
    //   changedValue.trim().length <= 9 &&
    //   changedValue.includes('@' || '.') &&
    //   typeof(changedValue) != "string"
    // ) {
    //   this.setState({ error: "Enter valid Email" });
    //   document.getElementById("emailError").innerHTML = (`<p>${this.state.error}</p>`);
    // } else {
    //   this.setState({ error: "" });
    //   document.getElementById("emailError").innerHTML = (`<p>${this.state.error}</p>`);
    // }
    // if (
    //   changedKey === "email" &&
    //   changedValue.trim().length <= 10 &&
    //   changedValue.includes('@' || '.') &&
    //   typeof parseInt(changedValue) != "string"
    // ) {
    //   this.setState({ error: "Enter valid name" });
    //   document.getElementById("fullName").append(`<p className="error"> ${this.state.error} </p>`)
    // } else {
    //   this.setState({ error: "", });
    // }
  };

  onGenderRadioChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  onHobbyCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    // this.setState({ hobbies: isChecked ? [...this.state.hobbies, value] : "" });

    this.setState({
      hobbies: isChecked
        ? [...this.state.hobbies, value]
        : this.hobbies.filter((v) => v !== value),
    });
    // this.setState((prevState) => ({
    //  hobbies: isChecked
    //     ? [...prevState.hobbies, value]
    //   : prevState.hobbies.filter((v) => v !== value),
    //  }));
  };

  onSelectChange = (event) => {
    this.setState({ states: event.target.value });
  };

  onPwdInput = (event) => {
    this.setState({ pwd: event.target.value });
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    const {
      fullName,
      email,
      age,
      title,
      gender,
      hobbies,
      states,
      address,
      pwd,
    } = this.state;
    const newFormData = {
      fullName,
      email,
      age,
      title,
      gender,
      hobbies,
      states,
      address,
      pwd,
    };
    console.log(this.state);
    this.props.onSubmit(newFormData);
    this.setState({
      fullName: "",
      email: "",
      age: "",
      title: "",
      gender: "",
      hobbies: [],
      states: "",
      address: "",
      pwd: "",
    });
  };

  render() {
    const {
      fullName,
      email,
      age,
      title,
      gender,
      hobbies,
      states,
      address,
      pwd,
    } = this.state;
    // console.log(this.state);
    return (
      <>
        <div className="mainDiv">
          <div className="mainForm">
            <form className="formClass" onSubmit={this.onFormSubmitHandler}>
              <div className="labelInput">
                <label htmlFor="fullName">FullName</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your Name"
                  value={this.state.fullName}
                  onChange={(e) => this.setState({ fullName: e.target.value })}
                ></input>
                <div className="errorClass">
                {!fullName.trim() ? (
                  <p id="fullNameError">Please enter name</p>
                ) : fullName.trim().length < 5 ? (
                  <p id="fullNameError">Name should be greater than 5 length</p>
                ) : null}
                </div>
              </div>

              <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                ></input>
                <div className="errorClass">
                {!email.trim() ? (
                  <p id="emailError">Please enter valid email</p>
                ) : fullName.trim().length < 5 ? (
                  <p id="emailError">Input should be greater than 5 length</p>
                ) : !email.includes('@' && '.') ? (
                  <p id="emailError">Input should be includes @ and . </p>
                ) : null
                }
                </div>
                {/* <p id="emailError"></p> */}

                {/* {this.state.error ? (
                  <span className="error"> {this.state.error} </span>
                ) : (
                  ""
                )} */}
              </div>

              <div className="labelInput">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter your Age"
                  min="1"
                  max="110"
                  value={this.state.age}
                  onChange={this.onInputChange}
                ></input>
                <div className="errorClass">
                {age<18 ? (
                  <p id="ageError">Please enter age above 18</p>
                ) : age>65 ? (
                  <p id="ageError">Please enter age below 65</p>
                ): null
                }
                </div>
                {/* changedValue.trim().length <= 9 &&
    //   changedValue.includes('@' || '.') &&
    //   typeof(changedValue) != "string" */}
              </div>

              <div className="labelInput">
                <label htmlFor="gender">Gender</label>
                <div className="genderFiled">
                  <div className="genderMale">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={this.state.gender === "male"}
                      onChange={this.onGenderRadioChange}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="genderFemale">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={this.state.gender === "female"}
                      onChange={this.onGenderRadioChange}
                    />
                    <label htmlFor="female">female</label>
                  </div>
                </div>
              </div>

              <div className="labelInput">
                <label htmlFor="hobbies" id="hobbies">
                  Hobbies
                </label>
                <div className="hobbyFiled">
                  <div className="hobbyCricket">
                    <input
                      type="checkbox"
                      id="cricket"
                      name="hobbies"
                      value="cricket"
                      checked={this.state.hobbies.includes("cricket")}
                      onChange={this.onHobbyCheckboxChange}
                    />
                    <label htmlFor="cricket">Cricket</label>
                  </div>
                  <div className="hobbyBasketball">
                    <input
                      type="checkbox"
                      id="football"
                      name="hobbies"
                      value="football"
                      checked={this.state.hobbies.includes("football")}
                      onChange={this.onHobbyCheckboxChange}
                    />
                    <label htmlFor="football">Football</label>
                  </div>
                  <div className="hobbyFootball">
                    <input
                      type="checkbox"
                      id="basketball"
                      name="hobbies"
                      value="basketball"
                      checked={this.state.hobbies.includes("basketball")}
                      onChange={this.onHobbyCheckboxChange}
                    />
                    <label htmlFor="basketball">Basketball</label>
                  </div>
                </div>
              </div>

              <div className="labelInput selectState">
                <label htmlFor="states">State</label>
                <select
                  id="states"
                  name="states"
                  value={this.state.states}
                  onChange={this.onSelectChange}
                >
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                </select>
              </div>

              <div className="labelInput">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onInputChange}
                  rows="10"
                  cols="30"
                ></textarea>
                <div className="errorClass">
                {address.trim().length<15 ? (
                  <p id="addressError">Please enter some more character</p>
                ): null
                }
                </div>
              </div>

              <div className="labelInput">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  id="pwd"
                  name="pwd"
                  value={this.state.pwd}
                  onInput={this.onPwdInput}
                ></input>
                <div className="errorClass">
                {pwd.trim().length<1 ? (
                  <p id="pwdError">Please enter strong password </p>
                ) : pwd.trim().length>8 ? (
                  <p id="pwdError">It's valid Strong password </p>
                ): null
                }
                </div>
              </div>

              <input type="submit" />
              {/* <button type="submit" >Submit</button> */}
            </form>
          </div>
        </div>
      </>
    );
  }
}

/*
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
      gender: "",
      hobbies: [],
      states: "",
      address: "",
      pwd: "",
    };
  }
  onInputChange = (event) => {
    event.preventDefault();
    let changedKey = event.target.name;
    let changedValue = event.target.value;
    this.setState({ [changedKey]: changedValue });
  };

  onGenderRadioChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  onHobbyCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    // this.setState({ hobbies: isChecked ? [...this.state.hobbies, value] : "" });

    this.setState({hobbies : (isChecked?[...this.state.hobbies, value]:this.hobbies.filter((v)=>v!==value)),})
    // this.setState((prevState) => ({
    //  hobbies: isChecked
    //     ? [...prevState.hobbies, value]
    //   : prevState.hobbies.filter((v) => v !== value),
    //  }));
  };

  onSelectChange = (event) => {
    this.setState({ states: event.target.value });
  };

  onPwdInput = (event) => {
    this.setState({ pwd: event.target.value });
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    const {
      fullName,
      email,
      age,
      title,
      gender,
      hobbies,
      states,
      address,
      pwd,
    } = this.state;
    const newFormData = {
      fullName,
      email,
      age,
      title,
      gender,
      hobbies,
      states,
      address,
      pwd,
    };
    console.log(this.state);
    this.props.onSubmit(newFormData);
    this.setState({
      fullName: "",
      email: "",
      age: "",
      title: "",
      gender: "",
      hobbies: [],
      states: "",
      address: "",
      pwd: "",
    });
  };

  render() {
    // const { fullName, email, age, formData } = this.state;
    // console.log(this.state);
    return (
      <>
        <div className="mainDiv">
          <div className="mainForm">
            <form className="formClass" onSubmit={this.onFormSubmitHandler}>
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

              <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                ></input>
              </div>

              <div className="labelInput">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter your Age"
                  min="1"
                  max="150"
                  value={this.state.age}
                  onChange={this.onInputChange}
                ></input>
              </div>

              <div className="labelInput">
                <label htmlFor="gender">Gender</label>
                <div className="genderFiled">
                  <div className="genderMale">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={this.state.gender === "male"}
                      onChange={this.onGenderRadioChange}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="genderFemale">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={this.state.gender === "female"}
                      onChange={this.onGenderRadioChange}
                    />
                    <label htmlFor="female">female</label>
                  </div>
                </div>
              </div>

              <div className="labelInput">
                <label htmlFor="hobbies" id="hobbies">
                  Hobbies
                </label>
                <div className="hobbyFiled">
                  <div className="hobbyCricket">
                    <input
                      type="checkbox"
                      id="cricket"
                      name="hobbies"
                      value="cricket"
                      checked={this.state.hobbies.includes("cricket")}
                      onChange={this.onHobbyCheckboxChange}
                    />
                    <label htmlFor="cricket">Cricket</label>
                  </div>
                  <div className="hobbyBasketball">
                    <input
                      type="checkbox"
                      id="football"
                      name="hobbies"
                      value="football"
                      checked={this.state.hobbies.includes("football")}
                      onChange={this.onHobbyCheckboxChange}
                    />
                    <label htmlFor="football">Football</label>
                  </div>
                  <div className="hobbyFootball">
                    <input
                      type="checkbox"
                      id="basketball"
                      name="hobbies"
                      value="basketball"
                      checked={this.state.hobbies.includes("basketball")}
                      onChange={this.onHobbyCheckboxChange}
                    />
                    <label htmlFor="basketball">Basketball</label>
                  </div>
                </div>
              </div>

              <div className="labelInput selectState">
                <label htmlFor="states">State</label>
                <select
                  id="states"
                  name="states"
                  value={this.state.states}
                  onChange={this.onSelectChange}
                >
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                </select>
              </div>

              <div className="labelInput">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onInputChange}
                  rows="10"
                  cols="30"
                ></textarea>
              </div>

              <div className="labelInput">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  id="pwd"
                  name="pwd"
                  value={this.state.pwd}
                  onInput={this.onPwdInput}
                ></input>
              </div>

              <input type="submit" />
    //           {/* <button type="submit" >Submit</button> *}/
    //           </form>
    //           </div>
    //         </div>
    //       </>
    //     );
    //   }
    // }
  */

// import React, { Component } from "react";
// import "./InputForm.css";

// export default class InputForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       fullName: "",
//       email: "",
//       age: "",
//       title: "",
//       gender: "",
//       hobbies: [],
//       states: "",
//       address: "",
//       pwd: "",
//       error: "",
//     };
//   }
//   onInputChange = (event) => {
//     event.preventDefault();
//     let changedKey = event.target.name;
//     let changedValue = event.target.value;
//     if (
//       changedKey === "fullName" &&
//       changedValue.length >= 4 &&
//       typeof parseInt(changedValue) != "number"
//     ) {
//       this.setState({ [changedKey]: changedValue });
//     } else {
//       this.setState({ error: "Enter some more Character" });
//     }
//     // {errorMessage && <div className="error"> {errorMessage} </div>}
//   };

//   onGenderRadioChange = (event) => {
//     this.setState({ gender: event.target.value });
//   };

//   onHobbyCheckboxChange = (event) => {
//     const value = event.target.value;
//     const isChecked = event.target.checked;
//     // this.setState({ hobbies: isChecked ? [...this.state.hobbies, value] : "" });

//     this.setState({
//       hobbies: isChecked
//         ? [...this.state.hobbies, value]
//         : this.hobbies.filter((v) => v !== value),
//     });
//     // this.setState((prevState) => ({
//     //  hobbies: isChecked
//     //     ? [...prevState.hobbies, value]
//     //   : prevState.hobbies.filter((v) => v !== value),
//     //  }));
//   };

//   onSelectChange = (event) => {
//     this.setState({ states: event.target.value });
//   };

//   onPwdInput = (event) => {
//     this.setState({ pwd: event.target.value });
//   };

//   onFormSubmitHandler = (event) => {
//     event.preventDefault();
//     const {
//       fullName,
//       email,
//       age,
//       title,
//       gender,
//       hobbies,
//       states,
//       address,
//       pwd,
//     } = this.state;
//     const newFormData = {
//       fullName,
//       email,
//       age,
//       title,
//       gender,
//       hobbies,
//       states,
//       address,
//       pwd,
//     };
//     console.log(this.state);
//     this.props.onSubmit(newFormData);
//     this.setState({
//       fullName: "",
//       email: "",
//       age: "",
//       title: "",
//       gender: "",
//       hobbies: [],
//       states: "",
//       address: "",
//       pwd: "",
//     });
//   };

//   render() {
//     // const { fullName, email, age, formData } = this.state;
//     // console.log(this.state);
//     return (
//       <>
//         <div className="mainDiv">
//           <div className="mainForm">
//             <form className="formClass" onSubmit={this.onFormSubmitHandler}>
//               <div className="labelInput">
//                 <label htmlFor="fullName">FullName</label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   placeholder="Enter your Name"
//                   value={this.state.fullName}
//                   onChange={this.onInputChange}
//                   >
//                 {this.state.error? <span className="error"> {this.state.error} </span> : ""}
//                 </input>
//               </div>

//               <div className="labelInput">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your Email"
//                   value={this.state.email}
//                   onChange={this.onInputChange}
//                 ></input>
//               </div>

//               <div className="labelInput">
//                 <label htmlFor="age">Age</label>
//                 <input
//                   type="number"
//                   id="age"
//                   name="age"
//                   placeholder="Enter your Age"
//                   min="1"
//                   max="150"
//                   value={this.state.age}
//                   onChange={this.onInputChange}
//                 ></input>
//               </div>

//               <div className="labelInput">
//                 <label htmlFor="gender">Gender</label>
//                 <div className="genderFiled">
//                   <div className="genderMale">
//                     <input
//                       type="radio"
//                       id="male"
//                       name="gender"
//                       value="male"
//                       checked={this.state.gender === "male"}
//                       onChange={this.onGenderRadioChange}
//                     />
//                     <label htmlFor="male">Male</label>
//                   </div>
//                   <div className="genderFemale">
//                     <input
//                       type="radio"
//                       id="female"
//                       name="gender"
//                       value="female"
//                       checked={this.state.gender === "female"}
//                       onChange={this.onGenderRadioChange}
//                     />
//                     <label htmlFor="female">female</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="labelInput">
//                 <label htmlFor="hobbies" id="hobbies">
//                   Hobbies
//                 </label>
//                 <div className="hobbyFiled">
//                   <div className="hobbyCricket">
//                     <input
//                       type="checkbox"
//                       id="cricket"
//                       name="hobbies"
//                       value="cricket"
//                       checked={this.state.hobbies.includes("cricket")}
//                       onChange={this.onHobbyCheckboxChange}
//                     />
//                     <label htmlFor="cricket">Cricket</label>
//                   </div>
//                   <div className="hobbyBasketball">
//                     <input
//                       type="checkbox"
//                       id="football"
//                       name="hobbies"
//                       value="football"
//                       checked={this.state.hobbies.includes("football")}
//                       onChange={this.onHobbyCheckboxChange}
//                     />
//                     <label htmlFor="football">Football</label>
//                   </div>
//                   <div className="hobbyFootball">
//                     <input
//                       type="checkbox"
//                       id="basketball"
//                       name="hobbies"
//                       value="basketball"
//                       checked={this.state.hobbies.includes("basketball")}
//                       onChange={this.onHobbyCheckboxChange}
//                     />
//                     <label htmlFor="basketball">Basketball</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="labelInput selectState">
//                 <label htmlFor="states">State</label>
//                 <select
//                   id="states"
//                   name="states"
//                   value={this.state.states}
//                   onChange={this.onSelectChange}
//                 >
//                   <option value="Gujarat">Gujarat</option>
//                   <option value="Rajasthan">Rajasthan</option>
//                   <option value="Maharashtra">Maharashtra</option>
//                   <option value="Madhya Pradesh">Madhya Pradesh</option>
//                 </select>
//               </div>

//               <div className="labelInput">
//                 <label htmlFor="address">Address</label>
//                 <textarea
//                   id="address"
//                   name="address"
//                   value={this.state.address}
//                   onChange={this.onInputChange}
//                   rows="10"
//                   cols="30"
//                 ></textarea>
//               </div>

//               <div className="labelInput">
//                 <label htmlFor="pwd">Password:</label>
//                 <input
//                   type="password"
//                   id="pwd"
//                   name="pwd"
//                   value={this.state.pwd}
//                   onInput={this.onPwdInput}
//                 ></input>
//               </div>

//               <input type="submit" />
//               {/* <button type="submit" >Submit</button> */}
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
