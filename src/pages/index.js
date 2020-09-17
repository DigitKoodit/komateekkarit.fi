import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import vappu from '../static/vappu.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Tervetuloa" />
    <div className="ImageContainer">
      <img src={vappu} alt="Taidemuseonmäen lakitus" />
    </div>
    <div className="TextContainer">
      Tervetuloa ja suuret onnittelut, että olet päässyt opiskelemaan Turun yliopistoon kone- tai materiaalitekniikkaa.
      Näiltä sivuilta löydät ohjeita, joiden avulla yliopiston aloittaminen helpottuu. Nähdään pian!
      <p>– Kone- ja materiaalitekniikan tuutorit</p>
    </div>
  </Layout>
);

export default IndexPage;
