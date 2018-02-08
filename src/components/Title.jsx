import classNames from 'classnames';
import React, { PropTypes } from 'react';
import { colors } from '../constants';
import styles from './Title.scss';

function Title({
    className,
    value,
    ...props,
}) {
    return (
        <div className={styles.title}>
            {value}
        </div>
    );
}

export default Title;
