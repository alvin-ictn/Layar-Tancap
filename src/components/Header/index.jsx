import React, { Component } from 'react'
import HeaderImage from '../reusable/ImageItem'
import Navbar from '../Navbar'
import styles from './Header.modules.css'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <section className={styles["header--content"]}>  
          <HeaderImage className={styles["header--content--jumbotron"]}/>
          <div className={styles["header--content--information"]}>
            {this.props.children}
          </div>
        </section>
        <Navbar/>
      </header>
    )
  }
}
