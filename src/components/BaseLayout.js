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
    this.state = { key: this.props.key, mode: 'tile' }
  }

  render() {
    const tileDetail = this.state.key
    let viewComponent

    if (mode === 'detail') {
      viewComponent = '<' + { tileDetail } + ' />'
    } else {
      viewComponent = <TileContainer />
    }
    console.log(viewComponent)
    console.log(this.state.mode)
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
