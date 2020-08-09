import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tutors from "../components/tutors";

const TutorPage = () => (
  <Layout>
    <SEO title="Tuutorit" />
    <div className="TextContainer">
      Kone- ja materiaalitekniikan tuutorit yhteystietoineen löydät tältä sivulta. Sinulle annetaan orientaatioviikolla
      oma tuutoripari joka auttaa sinua koko fuksivuoden ajan.
    </div>
    <Tutors />
  </Layout>
)

export default TutorPage
