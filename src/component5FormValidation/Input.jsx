import React from "react";

function Input({
  label,
  type,
  id,
  name = id,
  state,
  setState = () => {
    return;
  },
  isValid = () => {
    return;
  },
}) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        // minWidth: "50vw",
        gap: "0.20vw",
      }}
    >
      {{ label } && <label htmlFor="id">{label}</label>}
      <input
        type={type}
        id={id}
        name={name}
        placeholder="Your name "
        value={state.value}
        style={{ width: "40vw", border: "none", borderRadius: "3px" }}
        onChange = {(e) => {
          setState({
                ...state,
                value: e.target.value,
                isInvalid: !isValid(e.target.value),
              })
        }}
        // checked={(type == "checkbox") ? (state.value.includes("football")) : "" }
        // onChange={(e) => {
          
        //     (label != "checkbox" ?
        //       setState({
        //         ...state,
        //         value: e.target.value,
        //         isInvalid: !isValid(e.target.value),
        //       }) : 

        //       setState({
        //         ...state,

        //         (e.target.checked ? value: [...state.value,e.target.value]:hobbieState.filter((v) => v !== value) ),

        //         isInvalid: !isValid(e.target.value),
        //       })
        //       // console.log(hobbieState);
        //       setState({
                
        //           ? [...hobbieState, e.target.value]
        //           : hobbieState.filter((v) => v !== value))
        //       )
        //     );
          
        // } }
        onBlur={() => {
          setState({ ...state, touched: true });
        }}
      />
      <div style={{ color: "red", height: "1vw" }}>
        {state.touched && state.isInvalid && <div> Invalid value</div>}
      </div>
    </div>
  );
}

export default Input;
