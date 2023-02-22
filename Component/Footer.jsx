import React from 'react'
import styles from '../styles/Component/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <h4>Support Us in <a>Paypal</a></h4>
            <p>Copyright {new Date().getFullYear()} by Student Commerce</p>
        </footer>
    )
}

export default Footer
