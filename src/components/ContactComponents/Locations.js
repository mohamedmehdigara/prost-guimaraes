import React from "react"

import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"

import LocationCard from "./LocationCard"

const GET_LOCATIONS = graphql`{
  getLocations: allFile(filter: {relativeDirectory: {eq: "locations"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  }
}`

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
              addressLink: "https://www.google.com/maps/place/Prost!/@41.4434223,-8.2955322,17z/data=!3m1!4b1!4m5!3m4!1s0xd24efe533983059:0x8c96be163e474178!8m2!3d41.4434223!4d-8.2933382",
              phone: "913 680 152",
              hours: {
                Mon_Sat: "12pm - 2am",
                Sun: "3pm - 2am",
                Tue: "closed",
              },
              description:
                "",
            },
          ]

          return locations.map(({ node }, index) => {
            return (
              <LocationCard
                fluid={node.childImageSharp.gatsbyImageData}
                locationInfo={locationInfo[index]}
              />
            );
          });
        }}
      />
    </LocationsWrapper>
  );
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
