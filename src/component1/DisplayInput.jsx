import React,{ Component } from 'react'

export default class DisplayInput extends Component{
    
    
    render(){
        const {text} = this.props;
        let characterCount = text.trim().match(/[a-zA-Z]/g).length;
        // let characterCount = (text) =>  {return text.trim().match(/[a-zA-Z]/g).length;} ;

        return(
            <>
                <h1>Your Entered text is : {text}</h1>

                <h1>Total character in the text is {characterCount}</h1>
            </>
        );
    }
}














// import React, { Component } from 'react'

// export class DisplayInput extends Component {
//   render() {
//     return (
//       <div>DisplayInput</div>
//     )
//   }
// }

// export default DisplayInput