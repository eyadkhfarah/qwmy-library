import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Student Commerce | Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fixed Components */}
      <main className={styles.main}>
        <section className="banner1">
          <h1>Home page</h1>
          <p>Welcome to your cool formu</p>
        </section>
        <section className="banner2">
          <h1>Home page</h1>
          <p>Welcome to your cool formu</p>
        </section>
        <section className="banner3">
          <h1>Home page</h1>
          <p>Welcome to your cool formu</p>
        </section>
        <section className="banner4">
          <h1>Home page</h1>
          <p>Welcome to your cool formu</p>
        </section>
      </main>
    </div>
  )
}
