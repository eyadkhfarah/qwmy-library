import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import Layout from '../Components/Layout'
import type { AppProps } from 'next/app'

interface Crypto {
  randomUUID: () => string;
}

interface CustomAppProps extends AppProps {
  crypto?: Crypto;
}

export default function MyApp({ Component, pageProps }: CustomAppProps): JSX.Element {
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