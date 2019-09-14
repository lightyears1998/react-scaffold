import React, {Component} from "react"
import ReactDOM from "react-dom"
import {speak} from "./freedom"

console.log("Hello, world!")
speak("This is an example for TypeScript file.")

window.onload = ()=> {
    alert("Happy coding!")
}

class App extends Component {
    render() {
        return (
            <div>
                <h1>Helle, world!</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
