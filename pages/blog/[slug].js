import React from 'react'
import Image from 'next/image'

import styles from '@styles/Component/BlogPost.module.css'

import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from 'next/head'

const blog = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await blog.getEntries({ 
      content_type: "tips" 
    })
  
    const paths = res.items.map(item => {
      return {
        params: { slug: item.fields.slug }
      }
    })
  
    return {
      paths,
      fallback: true
    }
  }
  
  export const getStaticProps = async ({ params }) => {
    const { items } = await blog.getEntries({
      content_type: 'tips',
      'fields.slug': params.slug
    }) 
  
    if (!items.length) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: { tips: items[0] },
      revalidate: 1
    }
  }

function Post({ tips }) {
    console.log(tips)
    const { thumbnail, title, subTitle , post } = tips.fields

    return (
        <div className={styles.main}>
            <Head>
                <title>{ title } | Commerce Students</title>
            </Head>
            <div>
                <div className="banner">
                    <h2>{ title }</h2>
                    <h4>{subTitle}</h4>
                    <Image
                        className="image"
                        src={'https:' + thumbnail.fields.file.url}
                        width={thumbnail.fields.file.details.image.width}
                        height={thumbnail.fields.file.details.image.height}
                    />
                </div>

                <div className="info">
                </div>
                
                <div className="post">
                    <div>{documentToReactComponents(post)}</div>
                </div>

            </div>
        </div>
    )
}

export default Post
