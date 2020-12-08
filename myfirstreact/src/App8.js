import React from "react"

function handleClick() {
    console.log("I was clicked")
}
/* function handleHover() {
    console.log("I was entered")
} */

// https://reactjs.org/docs/events.html#supported-events

function App8() {
    return (
        <div>
            <img  onMouseOver={()=>console.log("I was entered")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App8
