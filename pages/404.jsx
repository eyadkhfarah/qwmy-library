import Head from 'next/head'
import React from 'react'

import styles from '../styles/Component/Custom404.module.css'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Looks You Got 404 Error</title>
            </Head>
            <main>
                <div className={styles.main}>
                    <section>
                        <h1 className={styles.title}>Opss</h1>
                        <h4>This page is not found</h4>
                    </section>
                </div>
            </main>
        </>
    )
}

