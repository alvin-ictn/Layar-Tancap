import React, { Component } from 'react'
import styles from './Footer.module.css'
import BrandLogo from '../reusable/BrandLogo'
import SocialIcon from '../reusable/ImageItem'
import socialfb from '../../img/social-fb.svg'
import socialig from '../../img/social-ig.svg'
import socialtw from '../../img/social-tw.svg'
import socialli from '../../img/social-li.svg'

export default class Footer extends Component {
  render() {

    return (
      <section className={styles.footer}>
        <BrandLogo/>
        <div className={styles["footer--social-media"]}>
          <SocialIcon className={styles["footer--social-media--item"]} src={socialli} alt="linkedin logo"/>
          <SocialIcon className={styles["footer--social-media--item"]} src={socialtw} alt="twitter logo"/>
          <SocialIcon className={styles["footer--social-media--item"]} src={socialfb} alt="facebook logo"/>
          <SocialIcon className={styles["footer--social-media--item"]} src={socialig} alt="instagram logo"/>
        </div>
        <label htmlFor="copyright" className={styles["footer--copyright"]}>Alvin Mantovani &copy; 2020</label>
      </section>
    )
  }
}
