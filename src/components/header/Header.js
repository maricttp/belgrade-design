import React, { Component } from 'react'
import classNames from 'classnames'
import { translate } from 'react-i18next'

import darkAltLogo from '../../../assets/images/dark-alt.png'
import darkLogo from '../../../assets/images/dark.png'
import lightLogo from '../../../assets/images/light.png'
import styles from './header.module.scss'

class Header extends Component {

  render () {
    const {t, changeFullpageSlide, currentActive, isTeamHeader, buildVerticalSlide} = this.props

    let logo = lightLogo;
    if(6 === currentActive) {
      logo = darkLogo
    } else if(0 === currentActive) {
      logo = darkAltLogo
    }

    return (
      <header>
        <div className={styles.headerBox}>
          <img src={logo}/>
          {isTeamHeader ?
            <button onClick={buildVerticalSlide}>x</button> :
            <ul className={styles.navigation}>
              <li className={styles.navigationList}>
                <a className={classNames({
                  [styles.whiteLink]: [0,6].includes(currentActive),
                  [styles.redLink]: currentActive === 0,
                  [styles.greyLink]:  [1,2,3,4,5].includes(currentActive)}
                  )} onClick={changeFullpageSlide.bind(null, 0)}>
                  <p>{t('headerHome')}</p>
                </a>
              </li>
              <li className={styles.navigationList}>
                <a className={classNames({
                  [styles.whiteLink]: [0,6].includes(currentActive),
                  [styles.redLink]: currentActive === 1,
                  [styles.greyLink]: [1,2,3,4,5].includes(currentActive)}
                  )}
                   onClick={changeFullpageSlide.bind(null, 1)}>
                  <p>{t('headerSkillsTools')}</p>
                </a>
              </li>
              <li className={styles.navigationList}>
                <a className={classNames({
                  [styles.whiteLink]: [0,6].includes(currentActive),
                  [styles.redLink]: currentActive === 2,
                  [styles.greyLink]: [1,2,3,4,5].includes(currentActive)}
                  )}
                   onClick={changeFullpageSlide.bind(null, 2)}>
                  <p>{t('headerProjects')}</p>
                </a>
              </li>
              <li className={styles.navigationList}>
                <a className={classNames({
                  [styles.whiteLink]: [0,6].includes(currentActive),
                  [styles.redLink]: currentActive === 3,
                  [styles.greyLink]: [1,2,3,4,5].includes(currentActive)}
                  )}
                   onClick={changeFullpageSlide.bind(null, 3)} >
                  <p>{t('headerTeam')}</p>
                </a>
              </li>
              <li className={styles.navigationList}>
                <a className={classNames({
                  [styles.whiteLink]: [0,6].includes(currentActive),
                  [styles.redLink]: currentActive === 4,
                  [styles.greyLink]: [1,2,3,4,5].includes(currentActive)}
                  )}
                   onClick={changeFullpageSlide.bind(null, 4)}>
                  <p>{t('headerOffice')}</p>
                </a>
              </li>
              <li className={styles.navigationList}>
                <a className={classNames({
                  [styles.whiteLink]: [0,6].includes(currentActive),
                  [styles.redLink]: currentActive === 5,
                  [styles.greyLink]: [1,2,3,4,5].includes(currentActive)}
                  )}
                   onClick={changeFullpageSlide.bind(null, 5)}>
                  <p>{t('headerCity')}</p>
                </a>
              </li>
              <li className={styles.navigationList}>
                <a className={classNames({
                  [styles.whiteLink]: currentActive === 0 || currentActive === 6,
                  [styles.greyLink]: [1,2,3,4,5,6].includes(currentActive)}
                  )}
                   onClick={changeFullpageSlide.bind(null, 6)}>
                  <p>{t('headerContact')}</p>
                </a>
              </li>
            </ul>}
        </div>
      </header>
    )
  }
}

export default translate('translates')(Header)
