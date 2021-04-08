import Link from "next/link"
import styles from '../styles/Component/BlogCard.module.css'

function BlogCard({ tip }) {
    const {title, slug, post, thumbnail} = tip.fields

    return (
        <div className={styles.card} >
            <div className="thumb">
                {/* Image */}
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p>{post.content.value}</p>
            </div>
            <div className="action">
            <Link href={'/blog/' + slug}>
                <a>See Blog</a>
            </Link>
            </div>
        </div>
    )
}

export default BlogCard
