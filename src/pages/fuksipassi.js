import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fuksipassi from "../components/fuksipassi";

const ChecklistPage = () => (
  <Layout>
    <SEO title="Fuksipassi" />
    <div className="TextContainer">
      <Fuksipassi />
    </div>
  </Layout>
);

export default ChecklistPage
