import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"
import { useEffect } from "react"
const IndexPage = () => {
  const [state, setState] = useState({
    header: {
      head1: "KEPOLISIAN NEGARA REPUBLIK INDONESIA",
      head2: "DAERAH KEPULAUAN JATIM",
      head3: "RESOR LINGGA",
      head4: "Jalan Batu Kacang 01 Dabo Singkep",
      title1: "LAPORAN HASIL KEGIATAN",
      title2:
        "SIMPATIK GO TO SCHOOL PERSONIL SPKT POLRES LINGGA DALAM RANGKA MENINGKATKAN MINAT BACA ANAK DAN MENCIPTAKAN POLISI SAHABAT ANAK",
      date1: "DABO SINGKEP",
      date2: "25 FEBRUARI 2020",
    },
  })

  const handleChange = e => {
    setState(state => ({
      ...state.header,
      header: { [e.target.name]: e.target.value },
    }))
  }

  useEffect(() => {
    // Dealing with Textarea Height
    function calcHeight(value) {
      let numberOfLineBreaks = (value.match(/\n/g) || []).length
      // min-height + lines x line-height + padding + border
      let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2
      return newHeight
    }

    let textarea = document.querySelector("textarea")
    textarea.addEventListener("keyup", () => {
      textarea.style.height = calcHeight(textarea.value) + "px"
    })
  }, [state])

  return (
    <Layout>
      <Seo title="Home" />
      <section className="index">
        <div className="index__left">
          <div className="index__left--cover">
            <div className="header">
              <input
                type="text"
                name="head1"
                value={state.header.head1}
                onChange={handleChange}
              />
              <input
                type="text"
                name="head2"
                value={state.header.head2}
                onChange={handleChange}
              />
              <input
                type="text"
                name="head3"
                value={state.header.head3}
                onChange={handleChange}
              />
              <input
                type="text"
                name="head4"
                value={state.header.head4}
                onChange={handleChange}
              />
            </div>
            <div className="logo">
              <StaticImage
                src="../images/cover.png"
                alt="Tribrata"
                height={"100%"}
              />
            </div>
            <div className="description">
              <p>
                <textarea
                  cols={50}
                  name="title1"
                  value={state.header.title1}
                  onChange={handleChange}
                />
                <textarea
                  cols={50}
                  name="title2"
                  value={state.header.title2}
                  onChange={handleChange}
                />
              </p>
            </div>
            <div className="decoration">
              <StaticImage src="../images/decoration.png" alt="Tribrata" />
            </div>
            <div className="date">
              <input
                className="location"
                type="text"
                name="date1"
                value={state.header.date1}
                onChange={handleChange}
              />
              ,
              <input
                className="time"
                type="text"
                name="date2"
                value={state.header.date2}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* <div className="index__right"></div> */}
      </section>
    </Layout>
  )
}

export default IndexPage
