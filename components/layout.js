import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import useDarkMode from "../useDarkMode";


const name = "Sarah Bakir";
export const siteTitle = "Sarah Bakir";

export default function Layout({ children, home }) {
  const [colorTheme, setTheme] = useDarkMode();
  
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
      {colorTheme === "light" ? (
  <svg
    onClick={() => setTheme("light")}
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-indigo-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
) : (
  <svg
    onClick={() => setTheme("dark")}
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-gray-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)}
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile1.jpg"
                  className={utilStyles.borderCircle}
                  height={90}
                  width={90}
                  alt={name}
                />
              </a>
            </Link>

          </>
        )}
      </header>
      <main>{children}</main>
      <footer className={utilStyles.footer}>
        <p>made with love @ 2021</p>
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
