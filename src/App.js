import React, { Component } from 'react'
import './App.css'
import BaseLayout from './components/BaseLayout.js'
import netsvs from './images/Logo_trans_netsvs.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={netsvs} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo Bot 5000</h1>
        </header>
        <BaseLayout />
      </div>
    )
  }
}

export default App
