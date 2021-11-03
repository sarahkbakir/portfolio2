import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Menu({}) {
  return (
    <div className={utilStyles.menu}>
      {/* {Home} */}
      <ul>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/">
          <a >
            <li className={utilStyles.navbar}>Home</li>
          </a>
        </Link>
      </section>
      {/* certificates and projects section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/certificates">
          <a >
            <li className={utilStyles.navbar}>Projects</li>
          </a>
        </Link>
      </section>
      {/* blog section */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/Blog">
          <a >
            <li className={utilStyles.navbar}>Blog</li>
          </a>
        </Link>
      </section>

      {/* Skilss section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/skills">
          <a >
            <li className={utilStyles.navbar}>Skills</li>
          </a>
        </Link>
      </section>

      {/* contact section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/Contact">
          <a >
            <li className={utilStyles.navbar}>Contact</li>
          </a>
        </Link>
      </section>
      </ul>
    </div>
  );
}
