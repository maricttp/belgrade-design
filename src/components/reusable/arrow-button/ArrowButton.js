import React,{ Component } from 'react'
import Icon from '../icon/Icon'

import style from './arrowButton.module.scss'

export default class ArrowButton extends Component {
    
    render() {
        const {prevSlide, nextSlide} = this.props
       return ( 
        <div className={style.arrowButton}>
            <div className={style.left}>
                <span onClick={prevSlide}><Icon name="arrow_left" /></span>
            </div>
            <div className={style.right}>
                <span onClick={nextSlide}><Icon name="arrow_right" /></span>
            </div>
        </div>
       )
    }
}