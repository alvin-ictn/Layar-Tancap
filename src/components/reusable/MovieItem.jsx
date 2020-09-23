import React, { Component } from 'react'

export default class MovieItem extends Component {
  render() {
    return (
      <div>
        <img {...this.props}/>
      </div>
    )
  }
}
