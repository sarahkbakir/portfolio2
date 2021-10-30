import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'



export default function Skills () {
let skills = ['CSS3', 'HTML5', 'JavaScript', 'React', 'Redux', 'Webpack', 'Bootstrap', 'React bootstrap', 'Styled components', 'Node js' ]
    return (
        <Layout certificates>
            <section className={utilStyles.headingMd}>
                <p>
                    Here are some skills I've been learning lately and I'm still adding to my list everyday!
                </p>
            </section>
      <section className={utilStyles.headingMd}>
      <ul className={`${utilStyles.list} ${utilStyles.padding1px}`}>
        {skills.map((skill, index)=> (
            <li className='skill' key={index}>
              {skill}
            </li>
        ))}
      </ul>
        
        {<br/>}
        

      </section>

      </Layout>
      )
    }