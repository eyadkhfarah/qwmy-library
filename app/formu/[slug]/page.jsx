import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faCommentAlt, faPaperPlane} from '@fortawesome/free-regular-svg-icons'


// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
  
//     // map data to an array of path objects with params (id)
//     const paths = data.map(post => {
//       return {
//         params: { id: post.id.toString() }
//       }
//     })
  
//     return {
//       paths,
//       fallback: false
//     }
//   }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
//     const data = await res.json();

//     return {
//         props: { post: data }
//     }
// }
  
// export const getStaticProps = async () => {
//     const res = await fetch('http://jsonplaceholder.typicode.com/comments');
//     const data = await res.json();

//     return {
//         props: {
//             comments: data,
//         }
//     }
// }

function Post({post}) {
    return (
        <div className={styles.main}>
            <Head>
                <title>Post | Commerece Student</title>
                <meta charset="utf-8" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
            </Head>
            <div className={styles.contauner}>
                <div className={styles.card}>
                    <h3></h3>
                    <p></p>
                    <div className={styles.bottom}>
                        <div className={styles.action}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faHeart} size="s"/>
                                <h6>2.5k</h6>
                            </div>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faCommentAlt} size="s"/>
                                <h6>500</h6>
                            </div>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faPaperPlane} size="s"/>
                                <h6>5k</h6>
                            </div>
                        </div>
                        <div className={styles.date}>
                            <h4>| 4/8/2020 - 7:59PM</h4>
                        </div>
                    </div>
                </div>
            </div>
                <div className={styles.card}>
                    <h3>Tags</h3>
                    <div className={styles.tags}>
                        <h4>Help</h4> <h4>Question</h4> <h4>unversity</h4> <h4>commerec</h4> <h4>Question</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <h3>Comments</h3>
                    <form className={styles.form}>
                        <label>
                            Comment:
                        </label>
                        <textarea name="comment" className="input" placeholder="Write a comment" />
                        <input className="btn"  type="submit" value="comment" />
                    </form>
                    {/* {comments.map(comment => (
                        <div key={post.id} className="comment">
                            <h4>{comment.name}</h4>
                            <p>{comment.body}</p>
                        </div>
                    ))} */}
                    <div className="comment">
                        {/* <Link herf="/username"> */}
                        
                            <h4>Eyad Farah</h4>
                        {/* </Link> */}
                            <p>Don't worry we can help you</p>
                        </div>
                </div>
        </div>
    )
}

export default Post
