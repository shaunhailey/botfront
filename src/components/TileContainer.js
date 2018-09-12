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
import '../styles/TileContainer.css'

class TileContainer extends Component {
  render() {
    const id = this.props.id
    const { mode } = this.props.mode
    console.log(this.props.id)
    return (
      <div className="box" id="1">
        <div className="table1">
          <Tile1 id="TileDetail01" mode="detail" onClick={e => this.props.handleTileClick(id, mode)} />
          <Tile2 id="TileDetail02" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile3 id="TileDetail03" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile4 id="TileDetail04" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile5 id="TileDetail05" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile6 id="TileDetail06" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile7 id="TileDetail07" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile8 id="TileDetail08" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile9 id="TileDetail09" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile10 id="TileDetail10" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile11 id="TileDetail11" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile12 id="TileDetail12" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile13 id="TileDetail13" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile14 id="TileDetail14" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile15 id="TileDetail15" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile16 id="TileDetail16" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile17 id="TileDetail17" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile18 id="TileDetail18" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile19 id="TileDetail19" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile20 id="TileDetail20" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
          <Tile21 id="TileDetail21" mode="detail" onClick={() => this.props.handleTileClick(id, mode)} />
        </div>
      </div>
    )
  }
}
export default TileContainer
