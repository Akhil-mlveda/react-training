import React,{useState} from 'react'
import UseEffect2InitialRender from './UseEffect2InitialRender'

function UseEffect3CleanUp() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        {display && <UseEffect2InitialRender />}
    </div>
  )
}

export default UseEffect3CleanUp