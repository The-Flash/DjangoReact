import React from "react"
import ReactDOM from "react-dom"

function Hello(props){
    return <h1>Hey, {props.name}</h1>
}

const element = <Hello name="Augustine Smith"/>

ReactDOM.render(
    element,
    document.getElementById("react")
)
