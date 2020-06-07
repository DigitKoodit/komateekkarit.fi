import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ChecklistPage = () => (
  <Layout>
    <SEO title="Muistilista" />
    <div className="TextContainer">
      Tältä sivulta löydät listan asioista jotka uuden opiskelijan tulee muistaa tehdä.
    </div>
  </Layout>
)

export default ChecklistPage
