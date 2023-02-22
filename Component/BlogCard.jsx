import Link from "next/link"
import styles from '../styles/Component/BlogCard.module.css'
import Image from "next/image";

function BlogCard({ tip }) {
    const {title, slug, subTitle, thumbnail} = tip.fields

    return (
        <div className={styles.card} >
            <div className="thumb">
                <Image 
                    src={'https:' + thumbnail.fields.file.url}
                    width="600"
                    height="400"
                    className="image"
                />
            </div>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{subTitle}</p>
            </div>
            <div className={styles.action}>
            <Link href={'/blog/' + slug}>
                <a><strong>See Blog</strong></a>
            </Link>
            </div>
        </div>
    )
}

export default BlogCard
