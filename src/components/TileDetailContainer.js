import React, { Component } from 'react'
import TileDetail from './TileDetail.js'
import '../styles/TileDetailContainer.css'

class TileDetailContainer extends Component {
  // handleSelect = e => {
  //   if (e.target.value !== 'none') {
  //     const name = e.target.value
  //     this.props.addEffect({ name, node: this.newEffectNode(name) })
  //   }
  // }

  render() {
    return (
      <div className="tileDetailContainerWrapper" id="1">
        <div className="part1">
          <TileDetail />
        </div>
      </div>
    )
  }
}
export default TileDetailContainer
