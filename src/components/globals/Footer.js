import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import Logo from "../Logo/Logo"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `https://www.facebook.com/profile.php?id=100086242280709`,
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: `https://www.instagram.com/prost_guimaraes`,
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <Logo className="title" alt />
        <div className="icons">
          {this.state.icons.map(icon => {
            return (
              <a
                href={icon.path}
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.icon}
              </a>
            )
          })}
        </div>
        <p className="copyright">copyright &copy; {new Date().getFullYear()} <a href="https://ahmedtokyo.com" target="_blank">Tokyo</a></p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};

  .icons {
    width: 4rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};

    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
    > a {
      color: inherit;
    }
  }

  .title {
    text-align: center;
    margin: 0 auto 2rem auto;
  }
`
