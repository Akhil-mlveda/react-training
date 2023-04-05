import React from 'react'

function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left" style={{color :props.color}}>
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }

export default SplitPane