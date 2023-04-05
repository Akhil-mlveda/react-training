import React from "react";

const Input = ({
  label,
  id,
  name = id,
  type = "text",
  state,
  setState,
  isValid,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "50vw",
      }}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        value={state.value}
        type={type}
        style={{ marginBottom: "0.5rem" }}
        // onChange={({ target: { value }}) => {
        //   setState({
        //     ...state,
        //     value,
        //     isInvalid: !isValid(value),
        //   });
        // }}

        onChange={(e) => {
          setState({
            ...state,
            value: e.target.value,
            isInvalid: !isValid(e.target.value),
          });
        }}
        onBlur={() => {
          setState({
            ...state,
            touched: true,
          });
        }}
      />
      {state.touched && state.isInvalid && (
        <div style={{ color: "red" }}>Invalid value</div>
      )}
    </div>
  );
};

export default Input;
