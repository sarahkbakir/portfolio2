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
       
        </p>
      </section>
      

   
    </Layout>
  );
}
