import React, { Component } from 'react'
import classNames from 'classNames'
import Icons from '../../../../assets/icons/icons.svg'

import styles from './icon.module.scss'

export default class Icon extends Component {
    render() {
        const { name, noHeight } = this.props;
        const classNameList = classNames(
            styles.icon,
            { [styles.noHeight]: noHeight}
        );
        return (
            <svg className={classNameList}>
                <use xlinkHref={`${Icons}#${name}`}/>
            </svg>
        );
    }
}