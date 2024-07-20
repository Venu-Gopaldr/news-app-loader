import React, { Component } from 'react'
import Pinwheel from './Pinwheel.gif'
import global from './global.gif'
import search from './search.gif'
import Spinner from './Spinner.gif'

export default class Spinner5 extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Pinwheel} alt="Pinwheel" />
        {/* <img src={global} alt="global" /> */}
        {/* <img src={search} alt="search" /> */}
        {/* <img src={Spinner} alt="Spinner" /> */}
      </div>
    )
  }
}
