import React, { Component } from 'react'
// import data from '../fakeData/fakeResults.json'

class TileAggregator extends Component {
  render() {
    return (
      <ul>
        {data.map(function(name) {
          return (
            <div>
              <li>
                {name.name}
              </li>
              <li>
                {name.address}
              </li>
              <li>
                {name.citation}
              </li>
              <li>
                {name.citationResults.violation}
              </li>
              <li>
                {name.citationResults.violationDate}
              </li>
              <li>
                {name.citationResults.isScumbag}
              </li>
            </div>
          )
        })}
      </ul>
    )
  }
}
export default TileAggregator
