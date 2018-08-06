import React, { Component } from 'react'
import { translate } from 'react-i18next'

import intro from '../../../assets/images/intro-bg.png'
import styles from './home.module.scss'

class Home extends Component {

  render () {
    const {t} = this.props
    return (
     <div className={styles.home}>
       <img src={intro}/>
     </div>
    )
  }
}

export default translate('translates')(Home)
