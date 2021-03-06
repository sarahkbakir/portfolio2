import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Menu from '../components/Menu'


const name = "Sarah Bakir";
export const siteTitle = "Sarah Bakir";

export default function Layout({ children, home }) {
  
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Sarah's first portfolio trial using next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header className={styles.header}>
        {/* <div className={utilStyles.toprightbanner}>
        </div> */}
      <Menu/>

        {home ? (
          <div className={utilStyles.heroimagehome}>
            <Image
              priority
              src="/images/profile1.jpg"
              className={utilStyles.borderCirclehome}
              height={400}
              width={400}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </div>
        ) : (
          <div className={utilStyles.heroimage}>
            {/* <Link href='/hiddenLinks'>
            <a>
               */}
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={70}
                  width={70}
                  alt={name}
                  />
                  {/* </a>
                  </Link> */}
                <h3 className={utilStyles.headingXl}>{name}</h3>
          </div>
        )}
      </header>
      <div className={utilStyles.toprightbanner}></div>
        <ThemeToggle />
      <main>{children}</main>
      <div className={utilStyles.bottomball}></div>
      <footer className={utilStyles.footer}>
        <span>Sarah Bakir 2021</span>
      </footer>
      
      {!home && (
          <div className={utilStyles.arrowright}>
            {<br />}
            <Link href="/">
              <a> Back Home </a>
            </Link>
          </div>
        )}
    </div>
  );
}
