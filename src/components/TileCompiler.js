import React, { Component } from 'react'
import houses from '../fakeData/fakeResults.json'

class TileCompiler extends Component {
  const houses = props.houses
  const houseList = houses.map((house) =>
    <li key={house.toString()}>
      {house}
    </li>
  )
  render() {
    return (
      <ul>
        {houseList}
      </ul>
    )
  }
}
export default TileCompiler
