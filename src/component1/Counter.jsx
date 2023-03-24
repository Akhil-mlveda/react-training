import React,{ Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        }

        
    }
    onBtnClick = (event) => {
        this.setState({
            count : this.state.count + 1,
        });
    };
    render(){
        // const {count} = this.state;
        return(
            <>
                {/* <button type = 'button' onClick={this.onBtnClick}>Count {count}</button> */}
                <button type = 'button' onClick={this.onBtnClick}>Count {this.state.count}</button>

            </>
        )
    }
}