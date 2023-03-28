import React, { Component } from "react";
import "./displayData.css";
export default class DisplayData extends Component {
  render() {
    const { employees } = this.props;
    // console.log( formData);
    return (
      <>
        <div className="displayBox">
          <h2>Submitted Data:</h2>
          <ul>
            {employees.map((data, index) =>
              data.fullName && data.email && data.age ? (
                <li key={index}>
                  <div>
                    <p>fullName: {data.fullName}</p>
                    <p>Email: {data.email}</p>
                    <p>Age: {data.age}</p>
                    <p>Title: {(data.age > 23 ? 'new' : 'old') + ' employee'}</p>
                  </div>
                </li>
              ) : (
                " "
              )
            )}
          </ul>
        </div>
      </>
    );
  }
}
