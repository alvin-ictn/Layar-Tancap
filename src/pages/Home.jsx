import React, { Component } from 'react'
import Header from '../components/Header'
import styles from './Home.modules.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <label className={styles["header--content--information--title"]}>A</label>
          <p className={styles["header--content--information--tagline"]}>B</p>
          <div className={styles["header--content--information--search"]}>C</div>
        </Header>
      </div>
    )
  }
}
