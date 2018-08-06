import React, { Component } from 'react'
import Link from "gatsby-link"
import { translate } from 'react-i18next'

import darkLogo from '../../../assets/images/dark-alt.png'
import styles from './header.module.scss'

class Header extends Component {

  render () {
    const {t} = this.props
    return (
      <header>
        <div className={styles.headerBox}>
          <img src={darkLogo}/>
          <ul className={styles.navigation}>
            <li className={styles.navigationList}>
              <Link className={styles.link} to='#home'>
                <p>{t('headerHome')}</p>
              </Link>
            </li>
            <li className={styles.navigationList}>
              <Link className={styles.link} to='#skill-tools'>
                <p>{t('headerSkillsTools')}</p>
              </Link>
            </li>
            <li className={styles.navigationList}>
              <Link className={styles.link} to='#projects' >
                <p>{t('headerProjects')}</p>
              </Link>
            </li>
            <li className={styles.navigationList}>
              <Link className={styles.link} to='#team' >
                <p>{t('headerTeam')}</p>
              </Link>
            </li>
            <li className={styles.navigationList}>
              <Link className={styles.link} to='#office'>
                <p>{t('headerOffice')}</p>
              </Link>
            </li>
            <li className={styles.navigationList}>
              <Link className={styles.link} to='#city'>
                <p>{t('headerCity')}</p>
              </Link>
            </li>
            <li className={styles.navigationList}>
              <Link className={styles.link} to='#contact'>
                <p>{t('headerContact')}</p>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default translate('home')(Header)
