import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import About from './About';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <About />
      <section className={utilStyles.headingMd}>
        <p>Hallo, I'm Sarah. I'm a front end developer! I'm an artist who loves spreading good vibes too.{<br/>}
        Notes: {<br/>}
        1. Don't forget to link your contacts here and use 'Link' component 'next/Link'. {<br/>}
        2. Your real picture {<br/>}
        3. a contact now button links to the form{<br/>}
        4. The blog section can be links to other pages rather than having a navbar or card boxes template: {<br/>}
        <ul>
          <li className={utilStyles.listItem}> Skills and certifications. </li>
          <li className={utilStyles.listItem}> Contact links and form. </li>
          <li className={utilStyles.listItem}> Ideas and projects.</li>
          <li className={utilStyles.listItem}> Blog posts about different topics technical and non technical and everything actually.</li>
        </ul>
         
         
         </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}