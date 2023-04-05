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
              {/* <button type="submit" >Submit</button> */}
            </form>
          </div>
        </div>
      </>
    );
  }
}
