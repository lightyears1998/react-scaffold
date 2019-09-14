import React, {Component} from "react"
import ReactDOM from "react-dom"
import {speak} from "./freedom"

console.log("Hello, world!")
speak("This is an example for TypeScript file.")

class App extends Component {
    render() {
        return (
            <div>
                <h1>Helle, world!</h1>
                <p>This is a template for creating single page application with React.js</p>
                <p>Have fun coding!</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
