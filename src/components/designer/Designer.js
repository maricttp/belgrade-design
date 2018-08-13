import React, { Component } from 'react'
import { translate } from 'react-i18next'

import styles from './designer.module.scss'

class Designer extends Component {

  render () {
    const {t} = this.props
    return (
      <div className={styles.designer}>
      </div>
    )
  }
}

export default translate('translates')(Designer)
