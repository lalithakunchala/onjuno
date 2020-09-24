import React from 'react'
import styles from './Button.module.css'

export default function Button(props) {
    return (
        <div>
            <button className={styles.backgroundBtn}>{props.label}</button>
        </div>
    )
}