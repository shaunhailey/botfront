import React, { Component } from 'react'
import Tile from './Tile.js'
import TileDetail from './TileDetail.js'
import '../styles/TileContainer.css'

class TileContainer extends Component {
  // handleSelect = e => {
  //   if (e.target.value !== 'none') {
  //     const name = e.target.value
  //     this.props.addEffect({ name, node: this.newEffectNode(name) })
  //   }
  // }

  render() {
    return (
      <div className="box" id="1">
        <div className="table1">
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    )
  }
}
export default TileContainer
