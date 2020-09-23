import React, { Component } from 'react'
import HeaderImage from '../reusable/ImageItem'
import Navbar from '../Navbar'

export default class Header extends Component {
  render() {
    return (
      <header>
        <HeaderImage/>
        <Navbar/>
      </header>
    )
  }
}
