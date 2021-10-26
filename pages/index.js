import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Contact from './Contact';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home ({ allPostsData }) {
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hallo, I'm Sarah. I'm a front end developer! I'm an artist who loves spreading good vibes too. You will find skills I learned with each course I achieved and a post about how I started my <strong>Front-End Development</strong> journey from scratch. {<br/>}
         </p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects, Skills and certificates :</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, skills }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              {skills}{<br/>}
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/Contact">

        <a>
        <h2 className={utilStyles.headingLg}>
          Contact and Profiles
        </h2>
          </a>
      </Link>
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