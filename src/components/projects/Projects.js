import React, { Component } from 'react'
import { translate } from 'react-i18next'
import Icon from '../reusable/icon/Icon'

import ubs from '../../../assets/images/ubs.svg'
import siemens from '../../../assets/images/siemens.svg'
import styles from './projects.module.scss'

class Projects extends Component {

  render() {
    const {t} = this.props

    return (
      <div className={styles.projects}>
        <div className={styles.title}>
          <h2>{t('projectsTitleWe')}</h2>
          <div className={styles.heart}>
            <Icon name="heart" />
          </div>
          <h2>{t('projectsTitleClients')}</h2>
        </div>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <div className={styles.cardContent}>
              <div className={styles.cardFront}>
                <div>
                  <div className={styles.logo}>
                    <img src={ubs} />
                  </div>
                  <h4>{t('projectsUBSProjectName')}</h4>
                </div>
                <p>{t('projectsUBSDuration')}</p>
              </div>
              <div className={styles.cardBack}>
                <div>
                  <h4>{t('projectsCardBackTitle')}</h4>
                  <p>{t('projectsUBSText')}</p>
                </div>
                <div>
                  <h4>{t('projectsCardTools')}</h4>
                  <div className={styles.cardList}>
                    <ul>
                      <li><h6>{t('projectsUBSTool1')}</h6></li>
                      <li><h6>{t('projectsUBSTool2')}</h6></li>
                      <li><h6>{t('projectsUBSTool3')}</h6></li>
                    </ul>
                    <ul>
                      <li><h6>{t('projectsUBSTool4')}</h6></li>
                      <li><h6>{t('projectsUBSTool5')}</h6></li>
                      <li><h6>{t('projectsUBSTool6')}</h6></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.cardContent}>
              <div className={styles.cardFront}>
                <div>
                  <div className={styles.logo}>
                    <img src={siemens} />
                  </div>
                  <h4>{t('projectsSiemensProjectName')}</h4>
                </div>
                <p>{t('projectsSiemensDuration')}</p>
              </div>
              <div className={styles.cardBack}>
                <div>
                  <h4>{t('projectsCardBackTitle')}</h4>
                  <p>{t('projectsSiemensText')}</p>
                </div>
                <div>
                  <h4>{t('projectsCardTools')}</h4>
                  <div className={styles.cardList}>
                    <ul>
                      <li><h6>{t('projectsSiemensTool1')}</h6></li>
                      <li><h6>{t('projectsSiemensTool2')}</h6></li>
                      <li><h6>{t('projectsSiemensTool3')}</h6></li>
                    </ul>
                    <ul>
                      <li><h6>{t('projectsSiemensTool4')}</h6></li>
                      <li><h6>{t('projectsSiemensTool5')}</h6></li>
                      <li><h6>{t('projectsSiemensTool6')}</h6></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card3}>
            <div className={styles.cardContent}>
              <div className={styles.cardFront}>
                <div>
                  <div className={styles.logo}>
                    <img src={ubs} />
                  </div>
                  <h4>{t('projectsUBS2ProjectName')}</h4>
                </div>
                <p>{t('projectsUBS2Duration')}</p>
              </div>
              <div className={styles.cardBack}>
                <div>
                  <h4>{t('projectsCardBackTitle')}</h4>
                  <p>{t('projectsUBS2Text')}</p>
                </div>
                <div>
                  <h4>{t('projectsCardTools')}</h4>
                  <div className={styles.cardList}>
                    <ul>
                      <li><h6>{t('projectsUBS2Tool1')}</h6></li>
                      <li><h6>{t('projectsUBS2Tool2')}</h6></li>
                      <li><h6>{t('projectsUBS2Tool3')}</h6></li>
                    </ul>
                    <ul>
                      <li><h6>{t('projectsUBS2Tool4')}</h6></li>
                      <li><h6>{t('projectsUBS2Tool5')}</h6></li>
                      <li><h6>{t('projectsUBS2Tool6')}</h6></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate('translates')(Projects)
