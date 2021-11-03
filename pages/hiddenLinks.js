import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function HiddenLinks() {
    
    return (
      <Layout HiddenLinks>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Hidden Links!</h2>
          </section>
      </Layout>
    )}