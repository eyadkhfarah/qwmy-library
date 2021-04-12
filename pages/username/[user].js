import Head from 'next/head'
import styles from '@styles/Component/Username.module.css'

export default function User() {
    return (
        <div className="main">
            <Head>
                <title>@eyad_farah | Commerece Student</title>
            </Head>
            <h1>Username</h1>
            <div className={styles.follow}>
                <div className={styles.data}>
                    <h4>Followers :</h4>
                    <h4>2.5K</h4>
                </div>
                <div className={styles.data}>  
                    <h4>Folloing :</h4>
                    <h4>200</h4>
                </div>

            </div>
        </div>
    )
}
