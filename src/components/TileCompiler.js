import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

const TileCompiler = () =>
  <div>
    <nav>
      <NavLink activeClassName="selected" className="nav-link" exact to="/TileDetail01" />
      <NavLink activeClassName="selected" className="nav-link" exact to="/TileDetail02" />
    </nav>
    <Switch>
      <Route path="/TileDetail01" component={TileDetail01} />
      <Route path="/TileDetail02" component={TileDetail02} />
      <Route path="/TileDetail03" component={TileDetail03} />
    </Switch>
  </div>
export default TileCompiler
