import React from "react"
import * as ReactDOMClient from 'react-dom/client';

// ReactDOM.render(React.createElement('input', {
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over")
// }), document.getElementById("app"))

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")
const helpText = "Help text!"

const elements = (<div>
    <h1>{helpText}</h1>
    <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
    <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
    </div>)
const app = document.getElementById("app")

const arr = ReactDOMClient.createRoot(app)

arr.render(elements)