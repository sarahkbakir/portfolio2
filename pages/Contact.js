import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Contact() {
  let profiles = ["Github", "CodeWars", "Codeforces", "Hackerrank"];
  let profileLinks = [
    
    "https://github.com/sarahkbakir",
    "https://www.codewars.com/users/sarahkbakir",
    "https://codeforces.com/profile/suekb",
    "https://www.hackerrank.com/sarahbakir_k?hr_r=1",
  ];
  return (
    <Layout Contact>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contact</h2>
        <p>
          You can contact me on <a href="https://www.linkedin.com/in/sarahbakir-k/">Linkedin</a>, Email me @ Sarahbakir.k@gmail.com, or
          just follow me and lets get in touch!
        </p>
        <ul className={utilStyles.list}>
          {profiles.map((profile, index) => (
            <li className={utilStyles.listItem} key={index}>
              <a href={profileLinks[index]} passHref={true}>
                {profile}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
