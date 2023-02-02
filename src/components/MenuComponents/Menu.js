import React, { Component } from "react"

import { Section, Title } from "../../utils"

import MenuItemsContainer from "./MenuItemsContainer"

export default class Menu extends Component {
  render() {
    const { items = [] } = this.props;
    return (
      <Section>
        <Title title="menu" />
        <MenuItemsContainer menuItems={items} />
      </Section>
    )
  }
}
