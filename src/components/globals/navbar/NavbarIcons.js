import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaInstagram, FaFacebook } from "react-icons/fa"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/profile.php?id=100086242280709",
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com/prost_guimaraes",
      },
    ],
  }
  render() {
    return (
      <IconsWrapper>
        {this.state.icons.map(i => {
          return (
            <a
              href={i.path}
              key={i.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {i.icon}
            </a>
          )
        })}
      </IconsWrapper>
    )
  }
}

const IconsWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }

  a {
    margin-inline: 1rem;
  }

  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    color: ${styles.colors.mainGrey};

    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .facebook-icon:hover {
    color: #3b579d; 
  }
  .instagram-icon:hover {
    color: #da5f53; 
  }
`
