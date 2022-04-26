import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <section className="index">
        <div className="index__left">
          <div className="index__left--cover">
            <div className="header">
              <p>KEPOLISIAN NEGARA REPUBLIK INDONESIA</p>
              <p>DAERAH KEPULAUAN RIAU</p>
              <p>RESOR LINGGA</p>
              <p>Jalan Batu Kacang 01 Dabo Singkep</p>
            </div>
            <div className="logo">
              <StaticImage src="../images/cover.png" alt="Tribrata" />
            </div>
            <div className="description">
              <p>
                LAPORAN HASIL KEGIATAN SIMPATIK GO TO SCHOOL PERSONIL SPKT
                POLRES LINGGA DALAM RANGKA MENINGKATKAN MINAT BACA ANAK DAN
                MENCIPTAKAN POLISI SAHABAT ANAK
              </p>
            </div>
            <div className="decoration">
              <StaticImage src="../images/decoration.png" alt="Tribrata" />
            </div>
            <div className="date">
              <h3 className="location">DABO SINGKEP</h3>,
              <h3 className="time">25 FEBRUARI 2020</h3>
            </div>
          </div>
        </div>
        <div className="index__right">
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
