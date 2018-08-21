import React, { Component } from 'react'
import '../styles/TileDetail.css'
import houseImage from '/Users/shaunhailey/Documents/testBotFrontEnd/botfront/src/images/streetview.jpeg'

class TileDetail extends Component {
  render() {
    return (
      <div className="tileSuperDetailWrapper">
        <div className="tileImageContainer">
          <img src={houseImage} className="tileImage" alt="property" />
        </div>
        <div className="tileDetailWrapper">
          <div>123 Some Address</div>
          <div>Miami</div>
          <div>FL</div>
          <div>ZIP: 12345</div>
          <div>Folio Number: 1234567890</div>
          <div>Violation(s):</div>
          <div>Something serious</div>
          <div>Something a little less serious</div>
          <div>Violation date:</div>
        </div>
      </div>
    )
  }
}
export default TileDetail
