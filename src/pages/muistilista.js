import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Todo from "../components/todo";

const ChecklistPage = () => (
  <Layout>
    <SEO title="Muistilista" />
    <div className="TextContainer">
      Tältä sivulta löydät listan asioista jotka uuden opiskelijan tulee muistaa tehdä.
      <Todo />
    </div>
  </Layout>
);

export default ChecklistPage
