import React from "react"

import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"

import styled from "styled-components"

import { styles } from "../../utils"

const Logo = ({ alt, ...rest }) => <LogoWrapper alt={alt} {...rest}>PROST!</LogoWrapper>;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  // Font was licensed by Prost Owner.
  font-family: SoftsoulOT-Light, avenir, sans-serif;
  // font-weight: 600;
  font-size: 2.5rem;
  line-height: 1;
  text-decoration: none;
  border: 2px solid ${props => props.alt ? styles.colors.mainWhite : styles.colors.mainBlack};
  width: 5.875rem;
  height: 2.375rem;
  padding-bottom: 0.125rem;
  color: ${props => props.alt ? styles.colors.mainWhite : styles.colors.mainBlack};
`;

export default Logo;