import React, { Component } from 'react'
import { translate } from 'react-i18next'
import PrimaryButton from '../reusable/primary-button/PrimaryButton'

import outro from '../../../assets/images/contact-bg.png'
import map from '../../../assets/images/map.png'
import styles from './contact.module.scss'

class Contact extends Component {

  sendMail() {
    window.location = "mailto:marija.vucinic@namics.com";
  }

  render () {
    const {t} = this.props

    return (
      <div className={styles.contact} style={{backgroundImage: `url(${outro})`}}>
        <div className={styles.wrapper}>
          <h1>{t('contactCheers')}</h1>
          <div>
            <a href="https://goo.gl/maps/hBp4bkEShsT2" target="_blank">
              <img src={map} />
            </a>
            <h4>{t('contactText')}</h4>
            <PrimaryButton
              text="CONTACT BGD OFFICE"
              onClick={this.sendMail}
              inverted
            />
          </div>
        </div>
      </div>
    )
  }
}

export default translate('translates')(Contact)
