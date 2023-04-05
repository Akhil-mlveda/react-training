import React from "react";

function checkbox({ label, type, id, name, value, state, setState }) {
  return (
    <div className="hobbyFiled">
      <div className="hobbyCricket">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          checked={state.value.includes(value)}

          onChange={(e) => {
            const value = e.target.value;
            const isChecked = e.target.checked;
            console.log(e.target.value);
            setState({
              value: (isChecked
                ? [...state.value, value]
                : state.value.filter((v) => v !== value))
            });
          }}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}

export default checkbox;
