import React, { Component } from 'react'
import { translate } from 'react-i18next'

import styles from './theCity.module.scss'
import flightsPng from '../../../assets/images/flights.png'
import restaurantsPng from '../../../assets/images/restaurants.png'
import belgradePng from '../../../assets/images/belgrade.png'
import rakijaPng from '../../../assets/images/rakija.png'

class TheCity extends Component {
  render() {
    const { t } = this.props
    const cities = ['Zurich', 'Munich', 'Frankfurt']
    const restaurants = ['Tri sesira restaurtant', 'Klub Knjizevnika restaurant', 'Stara Hercegovina restaurant']
    const rakijas = ['Rakia Bar', 'Ambar']
    const belgrade = ['Food & Culture Tour', 'Free Belgrade Walking Tour', 'Once Upon a Time in Yugoslavia Tour']
    const ListElem = ({ img, heading1, heading2, list }) => {
      return (
        <div className={styles.ListElem}>
          <img src={img}/>
          <div className={styles.textWrapper}>
            <h5>{heading1}</h5>
            <h6>{heading2}</h6>
            <ul>{list.map(obj => <li>{obj}</li>)}</ul>
          </div>
        </div>
      )
    }
    const fullList = [
      ListElem({img:flightsPng, heading1:t('theCityFlightsHeading5'), heading2:t('theCityFlightsHeading6'), list:cities}),
      ListElem({img:restaurantsPng, heading1:t('theCityRestaurantsHeading5'), heading2:t('theCityRestaurantsHeading6'), list:restaurants}),
      ListElem({img:rakijaPng, heading1:t('theCityRakijaHeading5'), heading2:t('theCityRakijaHeading6'), list:rakijas}),
      ListElem({img:belgradePng, heading1:t('theCityBelgradeHeading5'), heading2:t('theCityBelgradeHeading6'), list:belgrade})
    ]

    return (
      <div className={styles.theCity}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <h2>{t('theCityQuestion')}</h2>
          </div>
          <div className={styles.listWrapper}>
            {fullList}
          </div>
        </div>
      </div>
    )
  }
}

export default translate('translates')(TheCity)