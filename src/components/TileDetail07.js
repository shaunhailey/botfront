import React, { Component } from 'react'
import BackButton from './BackButton.js'
import '../styles/TileDetail.css'
import houseImage from '/Users/shaunhailey/Documents/testBotFrontEnd/botfront/src/images/house7.jpeg'

class TileDetail07 extends Component {
  render() {
    return (
      <div className="tileSuperDetailWrapper">
        <div className="tileImageContainer">
          <img src={houseImage} className="tileImage" alt="property" />
        </div>
        <div className="tileDetailWrapper">
          <div>1898 War Ave</div>
          <div>Miami</div>
          <div>FL</div>
          <div>ZIP: 12345</div>
          <div>Folio Number: 123457</div>
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
export default TileDetail07
