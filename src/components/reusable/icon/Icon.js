import React, { Component } from 'react'
import classNames from 'classNames'
import Icons from '../../../../assets/icons/icons.svg'

import styles from './icon.module.scss'

export default class Icon extends Component {
    render() {
        const { name } = this.props;
        const classNameList = classNames(
            styles.icon
        );
        return (
            <svg className={classNameList}>
                <use xlinkHref={`${Icons}#${name}`}/>
            </svg>
        );
    }
}