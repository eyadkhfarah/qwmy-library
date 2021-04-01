import React from 'react'
import styles from '../styles/Formu.module.css'
import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            posts: data,
        }
    }
}

function Fromu({ posts }) {
    return (
        <>
            <Head>
                <title>Student Commerce | Formu</title>
            </Head>
            <div className="main">
                <div className={styles.header}>
                    <h1>Formu</h1>
                    <div>
                        <a className={styles.btn}>Create Post</a>
                    </div>
                </div>

                <div className="container">
                    {posts.map(post => (

                        <div key={post.id} className="card">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Fromu
