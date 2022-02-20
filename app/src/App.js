import React, { Component } from 'react';
import { WelcomeEden } from './components/WelcomeEden';
import { HowEden } from "./components/HowEden"
import './App.css';
import "../src/styles/styles.css"
import { SetupEden } from './components/SetupEden';
import { CongratsEden } from "./components/CongratsEden"

class App extends Component {
    state = {
        component: 1
    }
    handleCallback = (childData) => {
        console.log("handleCall");
        this.setState({
            component: childData
        })
    }
    render() {
        if (this.state.component === 1) {return (< WelcomeEden parentCallback={this.handleCallback} />)}
        if (this.state.component === 2) { return (<SetupEden parentCallback={this.handleCallback} />) }
        if (this.state.component === 3) { return (<HowEden parentCallback={this.handleCallback} />) }
        else {
            return (<CongratsEden />)
        }
    }
}

export default App;