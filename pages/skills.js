import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'



export default function Skills () {
let skills = ['CSS3', 'HTML5', 'JavaScript', 'React', 'Redux', 'Webpack', 'Bootstrap', 'React bootstrap', 'Styled components', 'Node js', 'Next js']
    return (
        <Layout certificates>
            
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <ul >
        {skills.map((skill, index)=> (
            <li className={utilStyles.listItem} key={index}>
            {skill}
            </li>
        ))}
      </ul>
        
        {<br/>}
        

      </section>

      </Layout>
      )
    }