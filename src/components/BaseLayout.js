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
    this.state = { id: this.props.id, mode: this.props.mode }
  }

  handleTileClick(e) {
    console.log(e)
    console.log(e.target.id.toString())
    console.log(e.target.mode)
    this.props.handleTileClick()
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
        <TileContainer id={id} mode={mode} />
        <Footer />
      </div>
    )
  }
}

export default BaseLayout
