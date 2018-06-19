import React, { Component } from 'react'
import '../styles/Navi.css'

class Navi extends Component {
  // handleSelect = e => {
  //   if (e.target.value !== 'none') {
  //     const name = e.target.value
  //     this.props.addEffect({ name, node: this.newEffectNode(name) })
  //   }
  // }

  render() {
    return (
      <div className="navi">
        <div className="displayType">
          <select id="select" className="tripleBarf">
            <option value="1" selected>
              Tiles
            </option>
            <option value="2">List</option>
          </select>
        </div>
        <div className="search">
          <form action="" method="post">
            <div className="barforama">
              <label for="GET-query">Query: </label>
              <input id="GET-name" type="text" name="name" className="barf" />
              <input type="submit" value="Save" className="doubleBarf" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Navi
