import React, { Component } from 'react'
import { translate } from 'react-i18next'
import PrimaryButton from '../reusable/primary-button/PrimaryButton'

import group from '../../../assets/images/group_photo.png'
import styles from './team.module.scss'

class Team extends Component {

  render () {
    const {t, buildVerticalSlide} = this.props
    return (
      <div className={styles.team}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t('teamTitle')}</h2>
          <p className={styles.subtitle}>{t('teamSubtitle')}</p>
          <div className={styles.buttonWrapper}>          
            <PrimaryButton 
              text="teamButton"
              onClick={buildVerticalSlide}
            />
          </div>
        </div>
        <div className={styles.teamPhoto}>
          <img src={group}/>
        </div>
      </div>
    )
  }
}

export default translate('translates')(Team)
