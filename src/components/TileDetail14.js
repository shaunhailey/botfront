import React, { Component } from 'react'
import BackButton from './BackButton.js'
import '../styles/TileDetail.css'
import houseImage from '/Users/shaunhailey/Documents/testBotFrontEnd/botfront/src/images/house14.jpeg'

class TileDetail14 extends Component {
  render() {
    return (
      <div className="tileSuperDetailWrapper">
        <div className="tileImageContainer">
          <img src={houseImage} className="tileImage" alt="property" />
        </div>
        <div className="tileDetailWrapper">
          <div>1129 W 81st St</div>
          <div>Miami</div>
          <div>FL</div>
          <div>ZIP: 12345</div>
          <div>Folio Number: 123464</div>
          <div>Violation(s):</div>
          <div>Something very serious</div>
          <div>Something a little less serious</div>
          <div>Violation date: 01/01/2011</div>
        </div>
        <BackButton />
      </div>
    )
  }
}
export default TileDetail14
