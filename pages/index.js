import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Menu from '../components/Menu'
import Typing from '../components/Typing'

export default function Home({}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    
     

           <section className={utilStyles.headingMd}>
        <p>
        <Typing/>
          {/* Hallo, I'm Sarah. I'm a front end developer! I'm an artist who loves
          spreading good vibes too. You will find skills I learned with each
          course I achieved and a post about how I started my{" "}
          <strong>Front-End Development</strong> journey from scratch in my <strong>blog</strong> section. {<br />} */}
        </p>
      </section>
    </Layout>
  );
}
