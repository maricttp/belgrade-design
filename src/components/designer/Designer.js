import React, { Component } from 'react'
import { translate } from 'react-i18next'
import classNames from 'classNames'

import Icon from '../reusable/icon/Icon'

import styles from './designer.module.scss'

class Designer extends Component {

  renderSocialNetworks(data) {
    let classNameSN;
  
    return (
      <ul className={styles.socialNetworkWrapper}>
        {data.map((value, index) => {
          classNameSN = classNames(
            {[styles.email]: value.name === 'email'},
            {[styles.facebook]: value.name === 'facebook'},
            {[styles.twitter]: value.name === 'twitter'},
            {[styles.instagram]: value.name === 'instagram'},
            {[styles.dribbble]: value.name === 'dribbble'},
            {[styles.behance]: value.name === 'behance'},
            {[styles.linkedin]: value.name === 'linkedIn'}
          );
          const link = value.name === 'email' ? 'mailto:'+value.src : value.src
          const target = value.name === 'email' ? '_self' : '_blank'
          return (
            <li className={styles.socialNetworkItem} key={index}>
              <a href={link} className={classNameSN} target={target}>
                <Icon name={value.name} noHeight/>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  render () {
    const {t, number, data, total} = this.props
    const totalNumber = total < 10 ? '0'+String(total) : total;
    const currentNumber = number < 10 ? '0'+String(number) : number;

    return (
      <div className={styles.designer} style={{backgroundImage: `url(${data.image})`}}>
        <div className={styles.designerInfoWrapper}>
          <p className={styles.numberIndicator}>
            <span className={styles.currentlyActive}>{currentNumber}</span>/{totalNumber}
          </p>
          <div className={styles.designerInfo}>
            <h3 className={styles.firstName}>{data.firstName}</h3>
            <h3 className={styles.lastName}>{data.lastName}</h3>
            <h4 className={styles.jobDescription}>{data.jobDescription}</h4>
            <p className={styles.introduction}>{data.introduction}</p>
            {this.renderSocialNetworks(data.socialNetoworks)}
          </div>
        </div>
      </div>
    )
  }
}

export default translate('translates')(Designer)
