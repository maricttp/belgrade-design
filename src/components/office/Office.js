import React, { Component } from 'react'
import { translate } from 'react-i18next'

import office from '../../../assets/images/office.png'
import jan from '../../../assets/images/jan.png'
import styles from './office.module.scss'

class Office extends Component {

  render() {
    const {t} = this.props

    return (
      <div className={styles.office}>
        <div className={styles.image}>
          <img src={office} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <h3>bel<span>great</span>{t('officeTitle')}</h3>
            <p>{t('officeText')}</p>
          </div>
          <div className={styles.listWrapper}>
            <ul>
              <li><h6>{t('officeOpening')}</h6></li>
              <li><h6>{t('officeArea')}</h6></li>
              <li><h6>{t('officeFloors')}</h6></li>
            </ul>
            <ul>
              <li><h6>{t('officeEmployees')}</h6></li>
              <li><h6>{t('officeMen')}</h6></li>
              <li><h6>{t('officeWomen')}</h6></li>
            </ul>
            <ul>
              <li><h6>{t('officeDesigners')}</h6></li>
              <li><h6>{t('officeBackend')}</h6></li>
              <li><h6>{t('officeFrontend')}</h6></li>
            </ul>
          </div>
          <div className={styles.jan}>
            <img src={jan} />
            <div>
              <p>{t('officeManagingDirectorName')}</p>
              <p>{t('officeManagingDirectorPosition')}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate('translates')(Office)
