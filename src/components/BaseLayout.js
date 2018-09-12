import React, { Component } from 'react'
import TileDetailContainer from './TileDetailContainer.js'
import TileContainer from './TileContainer.js'
import Footer from './Footer.js'
import Navi from './Navi.js'
import Header from './Header.js'
import '../styles/BaseLayout.css'
let mode = ''

class BaseLayout extends Component {
  constructor(props) {
    super(props)
    this.state = { id: 'cat', mode: 'dog' }
    this.handleTileClick = this.handleTileClick.bind(this)
  }

  handleTileClick(e) {
    console.log('cat and dog')
    this.setState = { id: this.props.id, mode: this.props.mode }
    // console.log(e.target.id.toString())
    // console.log(e.target.mode)
    // this.props.handleTileClick(e)
  }

  render() {
    const id = this.props.id
    console.log(this.state.id)
    console.log(this.state.mode)
    console.log(this.props.id)
    console.log(this.props.mode)
    return (
      <div className="wrapper">
        <Navi />
        <h1>
          {this.state.id}
        </h1>
        <h1>
          {this.state.mode}
        </h1>
        <h1>
          {this.props.id}
        </h1>
        <h1>
          {this.props.mode}
        </h1>

        <TileContainer id={id} mode={mode} handleTileClick={this.handleTileClick} />
        <Footer />
      </div>
    )
  }
}

export default BaseLayout
