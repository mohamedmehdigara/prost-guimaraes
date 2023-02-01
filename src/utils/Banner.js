import React from "react"
import styled from "styled-components"

import Logo from "../components/Logo/Logo"

import { styles } from "../utils"

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

export function HomeBanner({ title, subtitle1, subtitle2, children }) {
  return (
    <BannerWrapper>
      <h1 className="title"><Logo alt className="logo" /></h1>
      <h3 className="subtitle"><a className="link" href="https://www.google.com/maps/place/Prost!/@41.4434223,-8.2955322,17z/data=!3m1!4b1!4m5!3m4!1s0xd24efe533983059:0x8c96be163e474178!8m2!3d41.4434223!4d-8.2933382" target="_blank">{subtitle1.address}</a></h3>
      <h3 className="subtitle"><a className="link" href={`tel:${subtitle1.phone.replaceAll(' ', '')}`}>{subtitle1.phone}</a></h3>
      {subtitle2 && (
        <div>
          <h3 className="subtitle">&</h3>
          <h3 className="subtitle">{subtitle2.address}</h3>
          <h3 className="subtitle">{subtitle2.phone}</h3>
        </div>
      )}
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  .logo {
    margin: 0 auto 1rem;
    font-size: 3rem;
    width: 13.5rem;
    height: 3.375rem;
  }

  .link {
    color: inherit;
  }

  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`

Banner.defaultProps = {
  title: "Default Title",
}
