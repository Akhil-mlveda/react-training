import React, { useState } from "react";
// import Counter from "./component1/Counter.jsx";
// import InputComponent from "./component1/InputComponent"
// import InputForm from "./component2/InputForm";
// import FormSubmitDisplay from "./component4usingfunctioncomp/FormSubmitDisplay";
import "./App.css";
// import Input from "./Input";
import Form from "./component5FormValidation/Form";
import WelcomeDialog from "./6composition/WelcomeDialog";
import SplitPane from "./6composition/SplitPane";
import Chat from "./6composition/Chat";
import Contacts from "./6composition/Contacts";
import FilterableProductTable from "./think-in-react/FilterableProductTable";
import UseEffect1 from "./useEffectsExamples/UseEffect1";
import UseEffect2InitialRender from "./useEffectsExamples/UseEffect2InitialRender";
import UseEffect3CleanUp from "./useEffectsExamples/UseEffect3CleanUp";

// const nameValidator = (name) => {
//   const trimmedName = name.trim();

//   return trimmedName.length > 5;
// };

// const emailValidator = (email) => {
//   const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//   return regex.test(email);
// };

// const initialInputState = {
//   value: "",
//   isInvalid: true,
//   touched: false,
// };




// const PRODUCTS = [
//     {
//       category: "Sporting Goods",
//       price: "$49.99",
//       stocked: true,
//       name: "Football",
//     },
//     // {
//     //   category: "Electronics",
//     //   price: "$399.99",
//     //   stocked: false,
//     //   name: "iPhone 5",
//     // },
//     {
//       category: "Sporting Goods",
//       price: "$9.99",
//       stocked: true,
//       name: "Baseball",
//     },
//     {
//       category: "Sporting Goods",
//       price: "$29.99",
//       stocked: false,
//       name: "Basketball",
//     },
//     {
//       category: "Electronics",
//       price: "$99.99",
//       stocked: true,
//       name: "iPod Touch",
//     },
//     {
//       category: "Electronics",
//       price: "$399.99",
//       stocked: false,
//       name: "iPhone 5",
//     },
//     {
//       category: "Electronics",
//       price: "$199.99",
//       stocked: true,
//       name: "Nexus 7",
//     },
//   ];

  
export const App = () => {
  // const [nameState, setNameState] = useState(initialInputState);
  // const [emailState, setEmailState] = useState(initialInputState);
  // const [select, setSelect] = useState(initialInputState);

  //   return (
  //     <form
  //       noValidate
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         flexFlow: "column",
  //         gap: "1rem",
  //       }}
  //     >
  //       <Input
  //         id="name"
  //         label="Name"
  //         state={nameState}
  //         setState={setNameState}
  //         isValid={nameValidator}
  //       />

  //       <Input
  //         id="email"
  //         label="Email"
  //         state={emailState}
  //         setState={setEmailState}
  //         isValid={emailValidator}
  //       />

  //       <select
  //         value={select.value}
  //         onChange={(e) => setSelect({ ...select, value: e.target.value })}
  //       >
  //         <option value="">Select val</option>
  //         <option value="gujarat">gujarat</option>
  //         <option value="up">up</option>
  //       </select>
  //       <pre>{JSON.stringify(select, null, 2)}</pre>

  //       <button
  //         type="submit"
  //         disabled={nameState.isInvalid || emailState.isInvalid}
  //       >
  //         Submit
  //       </button>
  //     </form>
  //   return (

  //       // <Form/>
  //       // <WelcomeDialog />
  //       ///specialization    we customize the component using props
  //       <>
  //       <SplitPane color="red"
  //       left={
  //         <Contacts />
  //       }
  //       right={
  //         <Chat />
  //       } />

  // {/* composition  */}
  //       <WelcomeDialog />
  // </>

  //   );
  // return (
  //   <>
  //     {/* <InputForm /> */}
  //     <FormSubmitDisplay />
  //     {/* <Counter /> */}
  //     {/* <InputComponent defaultText="Akhil" /> */}

  //   </>
  // );

  // return <FilterableProductTable products={PRODUCTS} />;

  return (
    // <UseEffect1 />
    // <UseEffect2InitialRender />
    <UseEffect3CleanUp />
  );
};

export default App;
