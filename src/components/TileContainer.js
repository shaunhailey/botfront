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
  constructor(props) {
    super(props)
    this.state = {
      key: null,
      mode: 'tile'
    }
  }
  handleTileClick(e) {
    const key = e.target.key
    const mode = e.target.mode
    this.setState(state => ({
      key: '',
      mode: ''
    }))
  }

  render() {
    console.log(this.state.key)
    return (
      <div className="box" id="1">
        <div className="table1">
          <Tile1 key="TileDetail01" mode="detail" onClick={this.handleTileClick} />
          <Tile2 key="TileDetail02" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile3 key="TileDetail03" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile4 key="TileDetail04" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile5 key="TileDetail05" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile6 key="TileDetail06" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile7 key="TileDetail07" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile8 key="TileDetail08" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile9 key="TileDetail09" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile10 key="TileDetail10" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile11 key="TileDetail11" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile12 key="TileDetail12" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile13 key="TileDetail13" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile14 key="TileDetail14" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile15 key="TileDetail15" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile16 key="TileDetail16" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile17 key="TileDetail17" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile18 key="TileDetail18" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile19 key="TileDetail19" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile20 key="TileDetail20" mode="detail" onClick={e => this.handleTileClick(e)} />
          <Tile21 key="TileDetail21" mode="detail" onClick={e => this.handleTileClick(e)} />
        </div>
      </div>
    )
  }
}
export default TileContainer
