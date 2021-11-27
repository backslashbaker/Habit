import React, {Component} from "react";
import Task from "./components/Task"

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Task></Task>)
    }
}