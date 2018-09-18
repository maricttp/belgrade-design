import React, { Component } from 'react'
import { translate } from 'react-i18next'

import styles from './skillsTools.module.scss'

class SkillsTools extends Component {

  render () {
    const {t} = this.props
    return (
      <div className={styles.skillsTools}>
        <div className={styles.wrapper}>
          <h2>{t('skillToolsQuestionFirst')}<br/>{t('skillToolsQuestionSecond')}<br/>{t('skillToolsQuestionThird')}</h2>
          <div>
            <h5>{t('skill')}</h5>
            <ul>
              <li><h6>{t('skillConceptDesign')}</h6></li>
              <li><h6>{t('skillPrototyping')}</h6></li>
              <li><h6>{t('skillVisualDesign')}</h6></li>
              <li><h6>{t('skillInteractionDesign')}</h6></li>
              <li><h6>{t('skillWireframing')}</h6></li>
              <li><h6>{t('skillIllustration')}</h6></li>
            </ul>
          </div>
          <div>
            <h5>{t('tools')}</h5>
            <ul>
              <li><h6>{t('toolsAdobeIllustrator')}</h6></li>
              <li><h6>{t('toolsAdobePhotoshop')}</h6></li>
              <li><h6>{t('toolsAdobeIndesign')}</h6></li>
              <li><h6>{t('toolsSketch')}</h6></li>
              <li><h6>{t('toolsAxure')}</h6></li>
              <li><h6>{t('toolsInVision')}</h6></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default translate('translates')(SkillsTools)
