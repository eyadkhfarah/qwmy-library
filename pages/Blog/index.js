import Head from "next/head"
import { createClient } from "contentful"
import BlogCard from "../../Component/BlogCard"
import styles from "../../styles/Blog.module.css"

export async function getStaticProps() {

    const blog = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await blog.getEntries({ content_type: 'tips'})

    return {
        props: {
            tips: res.items,
        }
    }

}

export default function Blog({ tips }) {
    console.log(tips)

    return (
        <div className="main">
            <Head>
            <title>Student Commerce | Blogs</title>
            </Head>
                <h1>Blogs</h1>
            <div className={styles.container}>

                <div className={styles.grid}>
                {tips.map(tip => (
                        <BlogCard key={tip.sys.id} tip={tip}/>
                        ))}
                </div>
            </div>
        </div>
    )
}