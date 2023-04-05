import React,{ useState} from 'react'
import InputForm from "./InputForm";
import DisplayData from "./DisplayData";
import "./formsubmitdisplay.css";
// import Extra from './extra';


function FormSubmitDisplay(props) {
  const [employees, setEmployees] = useState([]);

  const onEmployeeFormSubmit= (formDataFromInput) => {
    setEmployees([...employees,formDataFromInput]);
  }

  return (
    <div className="parentDiv">
    {/* // <Extra /> */}
      <InputForm onSubmit={onEmployeeFormSubmit} />
      <DisplayData employees={employees} />
    </div>
  )
}
export default FormSubmitDisplay;


