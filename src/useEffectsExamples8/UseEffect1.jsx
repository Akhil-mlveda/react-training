// import React, { Component } from 'react'

// export default class UseEffect1 extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             count:0,
//         }
//     }

//     componentDidMount(){
//         document.title = `Clicked ${this.state.count} times`
//     }

//     componentDidUpdate(prevProps, prevState) {
    // if(prevState.count !== this.state.count){
        // console.log('Updating document title');
        //         document.title = `Clicked ${this.state.count} times`
    // }
//     }

//   render() {
//     return (
//         <div>
//             <button onClick={() => this.setState({count:this.state.count + 1})} >
//                 Click {this.state.count} times
//             </button>
//         </div>
//     )
//   }
// }

import React, { useState, useEffect } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default UseEffect1;
