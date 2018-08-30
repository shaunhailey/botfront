import React, { Component } from 'react'
import TileCompiler from './TileCompiler.js'
import '../styles/Tile.css'

class Tile extends Component {
  render() {
    return (
      <div className="tileWrapper">
        <div>info</div>
        <div>more info</div>
        <div>gimme some more</div>
        <div>almost is good enough</div>
        <div>1234567890</div>
      </div>
    )
  }
}
export default Tile
