import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import BaseLayout from './components/BaseLayout.js'
import trash from './trash.gif'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={trash} className="App-logo" alt="logo" />
          <h1 className="App-title">Trash Bot Front End</h1>
        </header>
        <BaseLayout />
      </div>
    )
  }
}

export default App
