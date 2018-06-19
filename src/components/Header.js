import React, { Component } from 'react'
import '../styles/Header.css'

class Header extends Component {
  // handleSelect = e => {
  //   if (e.target.value !== 'none') {
  //     const name = e.target.value
  //     this.props.addEffect({ name, node: this.newEffectNode(name) })
  //   }
  // }

  render() {
    return (
      <div>
        <div className="header">Header</div>
      </div>
    )
  }
}
export default Header
