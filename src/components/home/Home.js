import React, { Component } from 'react'
import { translate } from 'react-i18next'

import intro from '../../../assets/images/intro-bg.png'
import styles from './home.module.scss'

class Home extends Component {

  render () {
    const {t} = this.props
    return (
      <div className={styles.home} style={{backgroundImage: `url(${intro})`}}>
        <div>
          <h1>{t('homeTitle')}</h1>
          <h4>{t('homeText')}</h4>
        </div>
      </div>
    )
  }
}

export default translate('translates')(Home)
