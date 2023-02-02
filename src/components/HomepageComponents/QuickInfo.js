import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title subtitle="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Visit us in the center of Guimarães, and enjoy the authentic taste of German draft beers! Whether you are looking for a night out with friends or a quiet drink after work, we have a warm and inviting atmosphere at your disposal. You'll want to come back for sure!
            <br /><br />
            Visite-nos no centro da cidade berço, e aprecie o verdadeiro sabor das cervejas de pressão alemãs! Quer esteja à procura de uma noite fora com amigos ou de uma bebida tranquila depois do trabalho, temos à sua disposição uma atmosfera calorosa e convidativa. Irá de certeza querer voltar!
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            {/* We define the generic / default styles in the SectionButton, but do all the 'positioning' styles inline like below */}
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;

  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 968px) {
    width: 60%;
  }
`
