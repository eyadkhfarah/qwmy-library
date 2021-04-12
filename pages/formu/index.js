import React from 'react'
import styles from '../../styles/Formu.module.css'
import Head from 'next/head'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            posts: data,
        }
    }
}

export default function Formu({ posts }) {
    return (
        <>
            <Head>
                <title>Student Commerce | Formu</title>
            </Head>
            <div className="main">
                <div className={styles.header}>
                    <h1>Formu</h1>
                    <div>
                        {/* <Link herf="formu/add-post"> */}
                        
                            <a className={styles.btn}>Create Post</a>
                        {/* </Link> */}
                    </div>
                </div>

                <div className="container">
                    {posts.map(post => (
                        <Link href={'/formu/' + post.id}>
                            <div key={post.id} className="card">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
