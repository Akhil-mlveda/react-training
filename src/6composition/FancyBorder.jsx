import React from 'react'

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}  style={{color:props.color}}>
       {props.children}
      </div>
    );
  }

export default FancyBorder