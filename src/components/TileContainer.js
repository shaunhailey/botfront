import React, { Component } from 'react'
import Tile1 from './Tile1.js'
import Tile2 from './Tile2.js'
import Tile3 from './Tile3.js'
import Tile4 from './Tile4.js'
import Tile5 from './Tile5.js'
import Tile6 from './Tile6.js'
import Tile7 from './Tile7.js'
import Tile8 from './Tile8.js'
import Tile9 from './Tile9.js'
import Tile10 from './Tile10.js'
import Tile11 from './Tile11.js'
import Tile12 from './Tile12.js'
import Tile13 from './Tile13.js'
import Tile14 from './Tile14.js'
import Tile15 from './Tile15.js'
import Tile16 from './Tile16.js'
import Tile17 from './Tile17.js'
import Tile18 from './Tile18.js'
import Tile19 from './Tile19.js'
import Tile20 from './Tile20.js'
import Tile21 from './Tile21.js'
import TileDetail01 from './TileDetail01.js'
import '../styles/TileContainer.css'

class TileContainer extends Component {
  constructor(props) {
    super(props)
    this.handleTileClick = this.handleTileClick.bind(this)
  }

  handleTileClick(e) {
    this.props.onTileSelection({ tileSelected: e.target.key })
  }

  render() {
    const tileSelected = this.props.tileSelected
    return (
      <div className="box" id="1">
        <div className="table1">
          <Tile1 key="TileDetail01" onClick={this.handleTileClick} />
          <Tile2 key="TileDetail02" onClick={this.handleTileClick} />
          <Tile3 key="TileDetail03" onClick={this.handleTileClick} />
          <Tile4 key="TileDetail04" onClick={this.handleTileClick} />
          <Tile5 key="TileDetail05" onClick={this.handleTileClick} />
          <Tile6 key="TileDetail06" onClick={this.handleTileClick} />
          <Tile7 key="TileDetail07" onClick={this.handleTileClick} />
          <Tile8 key="TileDetail08" onClick={this.handleTileClick} />
          <Tile9 key="TileDetail09" onClick={this.handleTileClick} />
          <Tile10 key="TileDetail10" onClick={this.handleTileClick} />
          <Tile11 key="TileDetail11" onClick={this.handleTileClick} />
          <Tile12 key="TileDetail12" onClick={this.handleTileClick} />
          <Tile13 key="TileDetail13" onClick={this.handleTileClick} />
          <Tile14 key="TileDetail14" onClick={this.handleTileClick} />
          <Tile15 key="TileDetail15" onClick={this.handleTileClick} />
          <Tile16 key="TileDetail16" onClick={this.handleTileClick} />
          <Tile17 key="TileDetail17" onClick={this.handleTileClick} />
          <Tile18 key="TileDetail18" onClick={this.handleTileClick} />
          <Tile19 key="TileDetail19" onClick={this.handleTileClick} />
          <Tile20 key="TileDetail20" onClick={this.handleTileClick} />
          <Tile21 key="TileDetail21" onClick={this.handleTileClick} />
        </div>
      </div>
    )
  }
}
export default TileContainer
