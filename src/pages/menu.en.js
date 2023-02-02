import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"

import menuImage from "../images/bcg/menuBcg.jpeg"

import Menu from "../components/MenuComponents/Menu"


const GET_MENU = graphql`
  {
    menuItems: allContentfulMenuItem (
      filter: {
        node_locale: { eq: "en-US" }
      }
      sort: {createdAt: ASC}
    ) {
      edges {
        node {
          name
          price
          ingredients
          image {
            gatsbyImageData(width: 150, height: 150)
          }
          categoryList
        }
      }
    }
  }
`

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader image={menuImage}>
      <Banner title="menu" subtitle="let's dig in" />
    </PageHeader>
    <StaticQuery
      query={GET_MENU}
      render={data => <Menu items={data.menuItems.edges} />}
    />
  </Layout>
)

export default MenuPage
