import React, { Component } from 'react'
import TileDetail01 from './TileDetail01.js'
import TileDetail02 from './TileDetail02.js'
import TileDetail03 from './TileDetail02.js'
import TileDetail04 from './TileDetail02.js'
import TileDetail05 from './TileDetail02.js'
import TileDetail06 from './TileDetail02.js'
import TileDetail07 from './TileDetail02.js'
import TileDetail08 from './TileDetail02.js'
import TileDetail09 from './TileDetail02.js'
import TileDetail10 from './TileDetail02.js'
import TileDetail11 from './TileDetail02.js'
import TileDetail12 from './TileDetail02.js'
import TileDetail13 from './TileDetail02.js'
import TileDetail14 from './TileDetail02.js'
import TileDetail15 from './TileDetail02.js'
import TileDetail16 from './TileDetail02.js'
import TileDetail17 from './TileDetail02.js'
import TileDetail18 from './TileDetail02.js'
import TileDetail19 from './TileDetail02.js'
import TileDetail20 from './TileDetail02.js'
import TileDetail21 from './TileDetail02.js'
import '../styles/TileDetailContainer.css'

class TileDetailContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tileDetail: '',
      mode: 'detail'
    }
  }

  render() {
    return (
      <div className="tileDetailContainerWrapper">
        <div className="part1">
          <TileDetail21 />
        </div>
      </div>
    )
  }
}
export default TileDetailContainer
