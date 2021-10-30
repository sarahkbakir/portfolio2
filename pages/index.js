import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Card from '../components/Card'
import Blog from "./Blog";


export default function Home({}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     
      <section className={utilStyles.headingMd}>
        <p>
          Hallo, I'm Sarah. I'm a front end developer! I'm an artist who loves
          spreading good vibes too. You will find skills I learned with each
          course I achieved and a post about how I started my{" "}
          <strong>Front-End Development</strong> journey from scratch in my <strong>blog</strong> section. {<br />}
        </p>
      </section>

      {/* blog section */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/Blog">
          <a>
            <h2 className={utilStyles.headingLg}>Blog</h2>
          </a>
        </Link>
      </section>


      {/* Skilss section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/skills">
          <a>
            <h2 className={utilStyles.headingLg}>Skills</h2>
          </a>
        </Link>
      </section>

      {/* certificates and projects section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/certificates">
          <a>
            <h2 className={utilStyles.headingLg}>Certificates and Projects</h2>
          </a>
        </Link>
      </section>

      {/* contact section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/Contact">
          <a>
            <h2 className={utilStyles.headingLg}>Contact and Profiles</h2>
          </a>
        </Link>
      </section>
    </Layout>
  );
}
