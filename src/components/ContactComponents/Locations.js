import React from "react"

import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"

import LocationCard from "./LocationCard"

const GET_LOCATIONS = graphql`
  {
    getLocations: allFile(filter: { relativeDirectory: { eq: "locations" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Locations = () => {
  return (
    <LocationsWrapper>
      <StaticQuery
        query={GET_LOCATIONS}
        render={data => {
          let locations = data.getLocations.edges
          let locationInfo = [
            {
              address: "Praça de São Tiago 11, 4880-445 Guimarães",
              phone: "913-680-152",
              hours: {
                Mon_Sat: "12pm - 2am",
                Sun: "3pm - 2am",
                Tue: "closed",
              },
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit voluptate magni quas impedit rerum itaque, obcaecati libero facilis eaque laboriosam iste veniam nulla necessitatibus",
            },
          ]

          return locations.map(({ node }, index) => {
            return (
              <LocationCard
                fluid={node.childImageSharp.fluid}
                locationInfo={locationInfo[index]}
              />
            )
          })
        }}
      />
    </LocationsWrapper>
  )
}

const LocationsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 2rem;
  max-width: 475px;
  margin: 2rem auto;
  // @media (min-width: 776px) {
  //   /* below is fractions, so its 2 columns */
  //   grid-template-columns: 1fr 1fr;
  //   grid-column-gap: 1rem;
  // }
`

export default Locations
