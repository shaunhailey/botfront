import React, { Component } from 'react'
// import TileCompiler from './TileCompiler.js'
import '../styles/Tile.css'

class Tile8 extends Component {
  render() {
    return (
      <div className="tileWrapper">
        <div>50 Juneau Hwy</div>
        <div>Miami</div>
        <div>FL</div>
        <div>ZIP: 12345</div>
        <div>Folio Number: 123458</div>
      </div>
    )
  }
}
export default Tile8
