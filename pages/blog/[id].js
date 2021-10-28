import Layout from '../../components/layout'
import { getAllPostIds, getBlogData } from '../../lib/blog'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Post({ postData }) {
    return (
        <Layout>
        <Head>
          <title>{postData.title}</title>
   
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
    
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    
        </article>
        
          {<br/>}
          <Link href="/Blog">
            <a>↩ Back </a>
          </Link>
      </Layout>
    )
  }

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const postData = await getBlogData(params.id)
    return {
      props: {
        postData
      }
    }
  }
  