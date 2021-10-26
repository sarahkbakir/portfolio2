import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Contact() {
    let profiles = ['Linkedin', 'Github', 'CodeWars' , 'Codeforces' , 'Hackerrank' ]
    let profileLinks = ['https://www.linkedin.com/in/sarahbakir-k/', 'https://github.com/sarahkbakir' , 'https://www.codewars.com/users/sarahkbakir' , 'https://codeforces.com/profile/suekb' , 'https://www.hackerrank.com/sarahbakir_k?hr_r=1']
    return (
        <Layout Contact>
    
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        Hey there ! thats the new component linked I made while learning next.js!
        this is the contact page
        <h2 className={utilStyles.headingLg}>Contacts and Profiles</h2>
        <h3 className={utilStyles.headingMd}>Profiles :</h3>
        <ul className={utilStyles.list}>
            {profiles.map((profile) => (

                <li className={utilStyles.listItem} key={profiles.indexOf({profile})} passHref={true}>
                    <Link href={profileLinks[profiles.indexOf({profile})]}target="_blank" >
                    {profile}

                    </Link>
                </li>
                ))
            }
        </ul>
    </section>
    </Layout >
        )
  }
  