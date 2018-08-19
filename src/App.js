import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import BaseLayout from './components/BaseLayout.js'
import netsvs from './netsvslogo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={netsvs} className="App-logo" alt="logo" />
          <h1 className="App-title">Front End</h1>
        </header>
        <BaseLayout />
      </div>
    )
  }
}

export default App
