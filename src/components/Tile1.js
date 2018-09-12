import React, { Component } from 'react'
// import TileCompiler from './TileCompiler.js'
import '../styles/Tile.css'

class Tile1 extends Component {
  render() {
    return (
      <div className="tileWrapper" id="TileDetail01" mode="detail">
        <div>123 The St</div>
        <div>Miami</div>
        <div>FL</div>
        <div>ZIP: 12345</div>
        <div>Folio Number: 123451</div>
      </div>
    )
  }
}
export default Tile1
