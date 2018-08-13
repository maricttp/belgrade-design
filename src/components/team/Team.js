import React, { Component } from 'react'
import { translate } from 'react-i18next'

import styles from './team.module.scss'

class Team extends Component {

  render () {
    const {t, buildVerticalSlide} = this.props
    return (
      <div className={styles.team}>
        <div>
          <button onClick={buildVerticalSlide}>{t('teamButton')}</button>
        </div>
      </div>
    )
  }
}

export default translate('translates')(Team)
