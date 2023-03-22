import '../styles/globals.css'
import { ThemeProvider } from "next-themes";

import { useState } from 'react'

export default function MyApp({ Component, pageProps, crypto }) {

    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}