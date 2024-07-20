import React, { Component } from 'react'
import Navbar from './components/Navbar'
// import News from './components/News'
import {Outlet} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Outlet/>
      {/* <News apiKey='37ec2bb3634d4ca1ab9e4d319df997e9' category='entertainment'/> */}
      </>
    )
  }
}
