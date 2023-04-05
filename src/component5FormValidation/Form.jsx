import React, { useState } from "react";
import Input from "./Input.jsx";
import Checkbox from "./checkbox.jsx";

const validateName = (value) => {
  return value.trim().length > 5;
};
const validateEmail = (value) => {
  return value.trim().length > 8 && value.includes("@" && ".");
};
const validateAge = (value) => {
  // console.log(typeof(parseInt(value)));
  return parseInt(value) > 18 && parseInt(value) < 65;
};
const validateState = (value) => {
  return value !== "";
};
const validatePwd = (value) => {
  return value.trim().length >= 8;
};
const validateGender = (value) => {
  <label htmlFor="female">female</label>;
  return value === "male" || "female";
};

// const onFormSubmitHandler = (event) => {
//   event.preventDefault();
//   const formSubmitData = {
//     name: nameState.value,
//     email: emailState.value,
//     age: ageState.value,
//     gender: genderState.value,
//     state: selectState.value,
//     pwd: pwdState.value,
//     gender: genderState.value,
//   };
//   setFormData([...formData, formSubmitData]);
// };

const initialInputState = {
  value: "",
  isInvalid: true,
  touched: false,
};
function Form() {
  const [nameState, setNameState] = useState(initialInputState);
  const [emailState, setEmailState] = useState(initialInputState);
  const [ageState, setAgeState] = useState(initialInputState);
  const [selectState, setSelectState] = useState(initialInputState);
  const [pwdState, setPwdState] = useState(initialInputState);
  const [genderState, setGenderState] = useState(initialInputState);
  const [hobbyState, setHobbyState] = useState({
    value: []
    // ,
    // isInvalid: true,
    // touched: false,
  });

  const [formData, setFormData] = useState([]);
  return (
    <>
      <form
        noValidate
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexFlow: "column",
          // margin: "20px",
          backgroundColor: "lightgray",
          margin: " 1vw 25vw",
          borderRadius: "10px",
          padding: "1vw",
          gap: "0.40vw",
        }}
      >
        <Input
          label="Name"
          type="text"
          id="name"
          name="name"
          state={nameState}
          setState={setNameState}
          isValid={validateName}
        />

        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          state={emailState}
          setState={setEmailState}
          isValid={validateEmail}
        />

        <Input
          label="Age"
          type="number"
          id="age"
          name="age"
          state={ageState}
          setState={setAgeState}
          isValid={validateAge}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexFlow: "column",
          }}
        >
          <label htmlFor="hobbies" id="hobbies">
            Hobbies
          </label>
          <div style={{ display: "flex", direction: "row" }}>
            <Checkbox
              label="Cricket"
              type="checkbox"
              id="cricket"
              name="hobbies"
              value="cricket"
              state={hobbyState}
              setState={setHobbyState}
            />
            <Checkbox
              label="Footboll"
              type="checkbox"
              id="footboll"
              name="hobbies"
              value="footboll"
              state={hobbyState}
              setState={setHobbyState}
            />
          </div>
        </div>
        {/* <div>
          <label id="hobby">Hobby</label>
          <Input
            label="Cricket"
            type="checkbox"
            id="cricket"
            name="hobby"
            state="cricket"
            setState={setHobbieState}
          />
        </div> */}

        <label htmlFor="gender">Gender</label>
        <div style={{}}>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={genderState.value === "male"}
            onChange={(e) =>
              setGenderState({
                ...selectState,
                value: e.target.value,
                isInvalid: !validateGender(e.target.value),
              })
            }
            onBlur={() => {
              setGenderState({ ...genderState, touched: true });
            }}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={genderState.value === "female"}
            onChange={(e) =>
              setGenderState({
                ...selectState,
                value: e.target.value,
                isInvalid: !validateGender(e.target.value),
              })
            }
            onBlur={() => {
              setGenderState({ ...genderState, touched: true });
            }}
          />
          <label htmlFor="female">female</label>
          <div style={{ color: "red", height: "1vw" }}>
            {genderState.touched && genderState.isInvalid && (
              <div> Invalid value</div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="states">State</label>
          <select
            id="states"
            name="states"
            value={selectState.value}
            onChange={(e) =>
              setSelectState({
                ...selectState,
                value: e.target.value,
                isInvalid: !validateState(e.target.value),
              })
            }
            onBlur={() => {
              setSelectState({ ...selectState, touched: true });
            }}
          >
            <option value="">Select val</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
          </select>
          <div style={{ color: "red", height: "1vw" }}>
            {selectState.touched && selectState.isInvalid && (
              <div> Invalid value</div>
            )}
          </div>
        </div>

        <Input
          label="Password"
          type="password"
          id="pwd"
          name="pwd"
          state={pwdState}
          setState={setPwdState}
          isValid={validatePwd}
        />
        <button
          type="submit"
          disabled={
            nameState.isInvalid ||
            emailState.isInvalid ||
            ageState.isInvalid ||
            genderState.isInvalid ||
            selectState.isInvalid ||
            pwdState.isInvalid
            // hobbyState.isInvalid
          }
          onClick={(event) => {
            event.preventDefault();
            const formSubmitData = {
              name: nameState.value,
              email: emailState.value,
              age: ageState.value,
              gender: genderState.value,
              hobby: hobbyState.value,
              state: selectState.value,
              pwd: pwdState.value,
            };
            setFormData([...formData, formSubmitData]);
          }}
        >
          Submit{" "}
        </button>
      </form>

      <div>
        <div className="displayBox">
          <h2>Submitted Data:</h2>
          <ul>
            {formData.map((data, index) => (
              <li key={index}>
                <div>
                  <p>Name: {data.name}</p>
                  <p>Email: {data.email}</p>
                  <p>Age: {data.age}</p>
                  <p>Title: {(data.age > 23 ? "new" : "old") + " employee"}</p>
                  <p>gender: {data.gender}</p>
                  <p>
                    Hobby :{data.hobby.toString()}
                  </p>
                  <p>state: {data.state}</p>
                  <p>password: {data.pwd}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Form;
