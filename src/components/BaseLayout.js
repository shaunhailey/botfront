import React, { Component } from 'react'
import TileDetailContainer from './TileDetailContainer.js'
import TileContainer from './TileContainer.js'
import Footer from './Footer.js'
import Navi from './Navi.js'
import Header from './Header.js'
import '../styles/BaseLayout.css'
let mode = ''

class BaseLayout extends Component {
  handleTileDetailBackClick = e => {
    this.setState(state => ({
      tileSelected: this.state.key,
      mode: 'tile'
    }))
  }

  handleTileClick = e => {
    if (e.target.key !== 'none') {
      const name = e.target.key
    }
  }

  render() {
    const tileDetail = this.props.tileDetail
    let viewComponent

    if (mode === 'tile') {
      viewComponent = <TileDetailContainer key={this.props.mode} name={this.props.tileSelected} />
    } else {
      viewComponent = <TileContainer onclick={this.props.mode} />
    }
    return (
      <div className="wrapper">
        <Navi />
        {viewComponent}
        <Footer />
      </div>
    )
  }
}

export default BaseLayout
