import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import Layout from '../Components/Layout'

import { useState } from 'react'

export default function MyApp({ Component, pageProps, crypto }) {

    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}