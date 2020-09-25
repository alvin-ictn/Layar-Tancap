import React, { Component } from 'react'
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <ul className={styles["menu-list"]}>
        <li className={styles["menu-item"]}>Movie</li>
        <li className={styles["menu-item"]}>About</li>
      </ul>
    )
  }
}
