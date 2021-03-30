import React from 'react'

import Head from 'next/head';

import styles from '../styles/About.module.css'

function About() {
    return (
        <>
            <Head>
                <title>Student Commerce | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={styles.container}>
                <h1>About</h1>
                <p>Hello this is stude commerce formu</p>
            </div>
        </>
    )
}

export default About
