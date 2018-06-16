import React, { Component } from 'react'
import TileContainer from './TileContainer.js'
import '../styles/BaseLayout.css'

class BaseLayout extends Component {
  render() {
    return (
      <div class="wrapper">
        <TileContainer />
      </div>
    )
  }
}

export default BaseLayout
