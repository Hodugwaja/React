import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return(
        <div className = {styles.wrapper}>
            <CSSModule />
        </div>
    )
}