import React from "react"

import styled from "styled-components"

import { GatsbyImage } from "gatsby-plugin-image";

import OrderOnlineButton from "./OrderOnlineButton"

import { SectionButton, styles } from "../../utils"

const LocationCard = ({ locationInfo, fluid }) => {
  return (
    <LocationCardWrapper>
      <GatsbyImage image={fluid} />
      <div className="text">
        <a className="link" href="https://www.google.com/maps/place/Prost!/@41.4434223,-8.2955322,17z/data=!3m1!4b1!4m5!3m4!1s0xd24efe533983059:0x8c96be163e474178!8m2!3d41.4434223!4d-8.2933382" target="_blank"><h3 className="address">{locationInfo.address}</h3></a>
        <a className="link" href={`tel:${locationInfo.phone.replaceAll(' ', '')}`}><h4 className="phone">{locationInfo.phone}</h4></a>
        <div className="hours">
          <p>Hours</p>
          <p>Mon - Sat: {locationInfo.hours.Mon_Sat}</p>
          <p>Sun: {locationInfo.hours.Sun}</p>
          <p>Tue: {locationInfo.hours.Tue}</p>
        </div>
      </div>
      <div className="description">
        <p>{locationInfo.description}</p>
      </div>
      <OrderOnlineButton />
    </LocationCardWrapper>
  );
}

const LocationCardWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  .text {
    margin: 1rem auto;
    text-align: center;
  }
  .text * {
    font-weight: 300;
    line-height: 1.3;
  }
  .hours {
    font-size: 1rem;

    p {
      margin: 0;
    }
  }
  .description {
    width: 20rem;
    margin: 0 auto;
  }
  .link {
    color: ${styles.colors.mainBlack}
  }
`

export default LocationCard
