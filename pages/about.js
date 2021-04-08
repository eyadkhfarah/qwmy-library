import React from 'react'

import Head from 'next/head';

import styles from '../styles/About.module.css'


export default function About() {
    return (
        <div>
            <Head>
                <title>Student Commerce | About Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={styles.container}>
                <h1>About</h1>
                <p>Hello this is stude commerce formu</p>
            </div>
        </div>
    )
}
