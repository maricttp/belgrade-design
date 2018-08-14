import React, { Component } from 'react'
import classNames from 'classNames'
import Icon from '../icon/Icon'

import style from './closeButton.module.scss'

export default class CloseButton extends Component {
    render() {
        const { inverted, onClick} = this.props
        const classNameList = classNames(
            style.closeButton,
            {
                [style.closeButtonInverted] :inverted
            })
        return (
            <button 
                className={classNameList}
                onClick={onClick}
            >
                <Icon
                    name="close"
                    color="white"
                />
            </button>
        )
    }
}

