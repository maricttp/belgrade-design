import React, {Component} from 'react';
import classNames from 'classNames';
import { translate } from 'react-i18next'

import style from './primaryButton.module.scss';

class PrimaryButton extends Component {

    render() {
        const { text, t, onClick, inverted } = this.props;
        const classNameList = classNames(
            style.primaryButton,{
                [style.primaryButtonInverted]: inverted
        });

        return (
            <button className={classNameList}
                    onClick={onClick}
            >
                {t(text)}
            </button>
        );
    }
}

export default translate('translates')(PrimaryButton)