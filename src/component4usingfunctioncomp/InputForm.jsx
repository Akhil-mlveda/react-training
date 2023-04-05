// import React, { useState } from "react";
// import "./inputForm.css";

// function InputForm(props) {

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [hobbies, setHobbies] = useState([]);
//   const [states, setStates] = useState("");
//   const [address, setAddress] = useState("");
//   const [pwd, setPwd] = useState("");

//   const [fullNameToggle, setFullNameToggle] = useState(false);
//   const [emailToggle, setEmailToggle] = useState(false);
//   const [ageToggle, setAgeToggle] = useState(false);
//   const [addressToggle, setAddressToggle] = useState(false);
//   const [pwdToggle, setPwdToggle] = useState(false);

//   // const onChanges = (e) => {
//   //   // let name = e.target.name;
//   //   // let value = e.target.value;

//   //   `set${e.target.name}`( e.target.value );
//   //   setToggle(true);
//   // }

//   const onHobbyCheckboxChange = (event) => {
//     const value = event.target.value;
//     const isChecked = event.target.checked;

//     setHobbies(
//       isChecked ? [...hobbies, value] : hobbies.filter((v) => v !== value)
//     );
//   };

//   const onFormSubmitHandler = (event) => {
//     event.preventDefault();
//     const newFormData = {
//       fullName,
//       email,
//       age,
//       gender,
//       hobbies,
//       states,
//       address,
//       pwd,
//     };
//     props.onSubmit(newFormData);
//   };

//   return (
//     <>
//       <div className="mainDiv">
//         <div className="mainForm">
//           <form className="formClass" onSubmit={onFormSubmitHandler}>
//             <div className="labelInput">
//               <label htmlFor="fullName">FullName</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 placeholder="Enter your Name"
//                 value={fullName}
//                 // onChange = {onChanges}
//                 onChange={(e) => {
//                   setFullName(e.target.value);
//                   setFullNameToggle(true);
//                 }}
//               ></input>
//               <div className="errorClass">
//                 {!fullNameToggle && !fullName ? (
//                   " "
//                 ) : !fullName.trim() ? (
//                   <p id="fullNameError">Please enter name</p>
//                 ) : fullName.trim().length < 5 ? (
//                   <p id="fullNameError">Name should be greater than 5 length</p>
//                 ) : null}
//               </div>
//             </div>

//             <div className="labelInput">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your Email"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setEmailToggle(true);
//                 }}
//                 // onChange={(e) => {  setEmail( e.target.value );  if(e.target.value) { setToggle(true); } else{setToggle(true);}}}
//               ></input>
//               <div className="errorClass">
//                 {!emailToggle && !email ? (
//                   " "
//                 ) : !email.trim() ? (
//                   <p id="emailError">Please enter valid email</p>
//                 ) : fullName.trim().length < 5 ? (
//                   <p id="emailError">Input should be greater than 5 length</p>
//                 ) : !email.includes("@" && ".") ? (
//                   <p id="emailError">Input should be includes @ and . </p>
//                 ) : null}
//               </div>
//             </div>

//             <div className="labelInput">
//               <label htmlFor="age">Age</label>
//               <input
//                 type="number"
//                 id="age"
//                 name="age"
//                 placeholder="Enter your Age"
//                 min="1"
//                 max="110"
//                 value={age}
//                 // onChange={(e) => setAge(e.target.value)}
//                 onChange={(e) => {
//                   setAge(e.target.value);
//                   setAgeToggle(true);
//                 }}
//               ></input>
//               <div className="errorClass">
//                 {!ageToggle && !age ? (
//                   " "
//                 ) : age < 18 ? (
//                   <p id="ageError">Please enter age above 18</p>
//                 ) : age > 65 ? (
//                   <p id="ageError">Please enter age below 65</p>
//                 ) : null}
//               </div>
//             </div>

//             <div className="labelInput">
//               <label htmlFor="gender">Gender</label>
//               <div className="genderFiled">
//                 <div className="genderMale">
//                   <input
//                     type="radio"
//                     id="male"
//                     name="gender"
//                     value="male"
//                     checked={gender === "male"}
//                     // onChange={onGenderRadioChange}
//                     onChange={(e) => setGender(e.target.value)}
//                   />
//                   <label htmlFor="male">Male</label>
//                 </div>
//                 <div className="genderFemale">
//                   <input
//                     type="radio"
//                     id="female"
//                     name="gender"
//                     value="female"
//                     checked={gender === "female"}
//                     // onChange={onGenderRadioChange}
//                     onChange={(e) => setGender(e.target.value)}
//                   />
//                   <label htmlFor="female">female</label>
//                 </div>
//               </div>
//               <div className="errorClass">
//                 {!ageToggle && !age ? (
//                   " "
//                 ) : age < 18 ? (
//                   <p id="ageError">Please enter age above 18</p>
//                 ) : age > 65 ? (
//                   <p id="ageError">Please enter age below 65</p>
//                 ) : null}
//               </div>
//             </div>

//             <div className="labelInput">
//               <label htmlFor="hobbies" id="hobbies">
//                 Hobbies
//               </label>
//               <div className="hobbyFiled">
//                 <div className="hobbyCricket">
//                   <input
//                     type="checkbox"
//                     id="cricket"
//                     name="hobbies"
//                     value="cricket"
//                     // checked={hobbies.includes("cricket")}
//                     onChange={onHobbyCheckboxChange}
//                   />
//                   <label htmlFor="cricket">Cricket</label>
//                 </div>
//                 <div className="hobbyBasketball">
//                   <input
//                     type="checkbox"
//                     id="football"
//                     name="hobbies"
//                     value="football"
//                     // checked={hobbies.includes("football")}
//                     onChange={onHobbyCheckboxChange}
//                   />
//                   <label htmlFor="football">Football</label>
//                 </div>
//                 <div className="hobbyFootball">
//                   <input
//                     type="checkbox"
//                     id="basketball"
//                     name="hobbies"
//                     value="basketball"
//                     // checked={hobbies.includes("basketball")}
//                     onChange={onHobbyCheckboxChange}
//                   />
//                   <label htmlFor="basketball">Basketball</label>
//                 </div>
//               </div>
//             </div>

//             <div className="labelInput selectState">
//               <label htmlFor="states">State</label>
//               <select
//                 id="states"
//                 name="states"
//                 value={states}
//                 onChange={(e) => setStates(e.target.value)}
//               >
//                 <option value="Gujarat" selected="selected">
//                   Gujarat
//                 </option>
//                 <option value="Rajasthan">Rajasthan</option>
//                 <option value="Maharashtra">Maharashtra</option>
//                 <option value="Madhya Pradesh">Madhya Pradesh</option>
//               </select>
//             </div>

//             <div className="labelInput">
//               <label htmlFor="address">Address</label>
//               <textarea
//                 id="address"
//                 name="address"
//                 value={address}
//                 // onChange={(e) => setAddress(e.target.value)}
//                 onChange={(e) => {
//                   setAddress(e.target.value);
//                   setAddressToggle(true);
//                 }}
//                 rows="10"
//                 cols="30"
//               ></textarea>
//               <div className="errorClass">
//                 {!addressToggle && !email ? (
//                   ""
//                 ) : address.trim().length < 15 ? (
//                   <p id="addressError">Please enter some more character</p>
//                 ) : null}
//               </div>
//             </div>

//             <div className="labelInput">
//               <label htmlFor="pwd">Password:</label>
//               <input
//                 type="password"
//                 id="pwd"
//                 name="pwd"
//                 value={pwd}
//                 onInput={(e) => {
//                   setPwd(e.target.value);
//                   setPwdToggle(true);
//                 }}
//               ></input>
//               <div className="errorClass">
//                 {!pwdToggle && !email ? (
//                   ""
//                 ) : pwd.trim().length < 1 ? (
//                   <p id="pwdError">Please enter strong password </p>
//                 ) : pwd.trim().length > 8 ? (
//                   <p id="pwdError">It's valid Strong password </p>
//                 ) : null}
//               </div>
//             </div>

//             <input type="submit" />
//             {/* <button type="submit" >Submit</button> */}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default InputForm;

import React, { useState } from "react";
import "./inputForm.css";

function InputForm(props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    hobbies: "",
    states: "",
    address: "",
    pwd: "",
  });
  const [formError, setFormError] = useState({
    fullName: false,
    email: false,
    age: false,
    gender: false,
    hobbies: false,
    states: false,
    address: false,
    pwd: false,
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [states, setStates] = useState();
  const [address, setAddress] = useState("");
  const [pwd, setPwd] = useState("");

  const [fullNameToggle, setFullNameToggle] = useState(false);
  const [emailToggle, setEmailToggle] = useState(false);
  const [ageToggle, setAgeToggle] = useState(false);
  const [addressToggle, setAddressToggle] = useState(false);
  const [pwdToggle, setPwdToggle] = useState(false);

  // const onChanges = (e) => {
  //   // let name = e.target.name;
  //   // let value = e.target.value;

  //   `set${e.target.name}`( e.target.value );
  //   setToggle(true);
  // }

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    setFormError({ ...formError, [name]: true });
  };

  const onHobbyCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setHobbies(
      isChecked ? [...hobbies, value] : hobbies.filter((v) => v !== value)
    );
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const newFormData = {
      fullName,
      email,
      age,
      gender,
      hobbies,
      states,
      address,
      pwd,
    };
    props.onSubmit(newFormData);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="mainForm">
          <form className="formClass" onSubmit={onFormSubmitHandler}>
            <div className="labelInput">
              <label htmlFor="fullName">FullName</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your Name"
                // value={fullName}
                // onChange = {onChanges}
                // onChange={(e) => {
                //   setFullName(e.target.value);
                //   setFullNameToggle(true);
                // }}
                value={formData.fullName}
                onChange={onChange}
              ></input>
              <div className="errorClass">
                {!formError.fullName && !formData.fullName ? (
                  " "
                ) : !formData.fullName.trim() ? (
                  <p id="fullNameError">Please enter name</p>
                ) : formData.fullName.trim().length < 5 ? (
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailToggle(true);
                }}
                // onChange={(e) => {  setEmail( e.target.value );  if(e.target.value) { setToggle(true); } else{setToggle(true);}}}
              ></input>
              <div className="errorClass">
                {!emailToggle && !email ? (
                  " "
                ) : !email.trim() ? (
                  <p id="emailError">Please enter valid email</p>
                ) : fullName.trim().length < 5 ? (
                  <p id="emailError">Input should be greater than 5 length</p>
                ) : !email.includes("@" && ".") ? (
                  <p id="emailError">Input should be includes @ and . </p>
                ) : null}
              </div>
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
                value={age}
                // onChange={(e) => setAge(e.target.value)}
                onChange={(e) => {
                  setAge(e.target.value);
                  setAgeToggle(true);
                }}
              ></input>
              <div className="errorClass">
                {!ageToggle && !age ? (
                  " "
                ) : age < 18 ? (
                  <p id="ageError">Please enter age above 18</p>
                ) : age > 65 ? (
                  <p id="ageError">Please enter age below 65</p>
                ) : null}
              </div>
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
                    checked={gender === "male"}
                    // onChange={onGenderRadioChange}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="genderFemale">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    // onChange={onGenderRadioChange}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="female">female</label>
                </div>
              </div>
              <div className="errorClass">
                {!ageToggle && !age ? (
                  " "
                ) : age < 18 ? (
                  <p id="ageError">Please enter age above 18</p>
                ) : age > 65 ? (
                  <p id="ageError">Please enter age below 65</p>
                ) : null}
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
                    // checked={hobbies.includes("cricket")}
                    onChange={onHobbyCheckboxChange}
                  />
                  <label htmlFor="cricket">Cricket</label>
                </div>
                <div className="hobbyBasketball">
                  <input
                    type="checkbox"
                    id="football"
                    name="hobbies"
                    value="football"
                    // checked={hobbies.includes("football")}
                    onChange={onHobbyCheckboxChange}
                  />
                  <label htmlFor="football">Football</label>
                </div>
                <div className="hobbyFootball">
                  <input
                    type="checkbox"
                    id="basketball"
                    name="hobbies"
                    value="basketball"
                    // checked={hobbies.includes("basketball")}
                    onChange={onHobbyCheckboxChange}
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
                value={states}
                onChange={(e) => setStates(e.target.value)}
              >
                <option>Select value</option>
                <option value="Gujarat">
                  Gujarat
                </option>
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
                value={address}
                // onChange={(e) => setAddress(e.target.value)}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setAddressToggle(true);
                }}
                rows="10"
                cols="30"
              ></textarea>
              <div className="errorClass">
                {!addressToggle && !email ? (
                  ""
                ) : address.trim().length < 15 ? (
                  <p id="addressError">Please enter some more character</p>
                ) : null}
              </div>
            </div>

            <div className="labelInput">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                id="pwd"
                name="pwd"
                value={pwd}
                onInput={(e) => {
                  setPwd(e.target.value);
                  setPwdToggle(true);
                }}
              ></input>
              <div className="errorClass">
                {!pwdToggle && !email ? (
                  ""
                ) : pwd.trim().length < 1 ? (
                  <p id="pwdError">Please enter strong password </p>
                ) : pwd.trim().length > 8 ? (
                  <p id="pwdError">It's valid Strong password </p>
                ) : null}
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

export default InputForm;
