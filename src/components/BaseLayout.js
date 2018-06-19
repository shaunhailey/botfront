import React, { Component } from 'react'
import TileContainer from './TileContainer.js'
import Footer from './Footer.js'
import Navi from './Navi.js'
import Header from './Header.js'
import '../styles/BaseLayout.css'

class BaseLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navi />
        <Header />
        <TileContainer />
        <Footer />
      </div>
    )
  }
}

export default BaseLayout
