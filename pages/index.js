import Head from 'next/head'
import Link from 'next/link'

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
        <section className="banner">
          <h1>Seacrh<br/>Ask</h1>
          <p>Welcome to your forum hub</p>
        </section>
        <section className="banner">
          <h1>What you could make!</h1>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Real-time Answer</h3>
              <p>Your question will answer by an expert</p>
              <Link href="/fromu">
                <a>Ask Now</a>
              </Link>
            </div>  
            <div className={styles.card}>
              <h3>Easy to orginze</h3>
              <p>Orginze your question desciption like pro</p>
              <a>Descipe Your Ask</a>
            </div>  
            <div className={styles.card}>
              <h3>Useful info</h3>
              <p>The answer will have a useful resoures</p>
              <a>Get Resoures</a>
            </div>  
            <div className={styles.card}>
              <h3>Easy to search</h3>
              <p>Have a comman question? seacrh it.</p>
              <a>Seacrh Now</a>
            </div>  
          </div>
        </section>
        <section className="banner">
          <h1>Home page</h1>
          <p>Welcome to your cool formu</p>
        </section>
        <section className="banner">
          <h1>Home page</h1>
          <p>Welcome to your cool formu</p>
        </section>
      </main>
    </div>
  )
}
