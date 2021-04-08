import Head from 'next/head'
import styles from '../../styles/Component/Post.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faCommentAlt, faPaperPlane} from '@fortawesome/free-regular-svg-icons'

function Post() {
    return (
        <div className={styles.main}>
            <Head>
                <title>Post | Commerece Student</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
            </Head>
            <div className={styles.contauner}>
                <div className={styles.card}>
                    <h3>Title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsam ad facilis itaque fuga soluta, quasi perspiciatis ipsum nisi tenetur eos laudantium culpa illum asperiores omnis amet, sequi sapiente nemo.</p>
                    <div className={styles.action}>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon} size="s"/>
                    <FontAwesomeIcon icon={faCommentAlt} className={styles.icon} size="xs"/>
                    <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} size="xs"/>
                    </div>
                </div>
            </div>
                <div className={styles.card}>
                    <h5>Reated Posts</h5>
                </div>
        </div>
    )
}

export default Post
