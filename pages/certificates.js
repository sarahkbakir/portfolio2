import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Contact from './Contact';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function certificates ({ allPostsData }) {

    return (
        <Layout certificates>
  
          <section className={utilStyles.headingMd}>
            <p>Hallo again, You will find skills I learned, projects I did, a post about how I started my <strong>Front-End Development</strong> journey from scratch and some useful resources. {<br/>} 
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
                {<br/>}{<br/>}
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