import React from 'react'
import styles from './Button.module.css'

const Button = props => {
    return (
        <>
            <button
                onClick={props.addNewUser}
                type={props.type || 'submit'}
                className={styles.button}
                >
                {props.children}
            </button>
        </>
    )
};

export default Button;