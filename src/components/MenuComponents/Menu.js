import React, { Component } from "react"

import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Section, Title } from "../../utils"

import MenuItemsContainer from "./MenuItemsContainer"

const GET_MENU = graphql`
  {
    menuItems: allContentfulMenuItem (
      filter: {
        node_locale: { eq: "en-US" }
      }
      sort: {
        fields: createdAt
      }
    ) {
      edges {
        node {
          name
          price
          ingredients
          image {
            fixed(height: 150, width: 150) {
              ...GatsbyContentfulFixed
            }
          }
          categoryList
        }
      }
    }
  }
`

export default class Menu extends Component {
  render() {
    return (
      <Section>
        <Title title="menu" />
        <StaticQuery
          query={GET_MENU}
          render={data => {
            const menuItems = data.menuItems.edges
            return <MenuItemsContainer menuItems={menuItems} />
          }}
        />
      </Section>
    )
  }
}

const MenuItemWrapper = styled.div``