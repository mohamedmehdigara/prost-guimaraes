import React from "react"

import { styles, Section, SectionButton } from "../../utils"

import styled from "styled-components"

export default function AboutText() {
  return (
    <AboutTextWrapper>
      <p>
      Once upon a time, in the heart of Guimarães, there lived a young man named Kevin. He was half-German, born to a Portuguese mother and a German father. Growing up, Kevin was always fascinated by the rich culture and history of his father's homeland, and he longed to experience it for himself.

      The pandemic struck Kevin with an uncertain future, therefore he left his job in Germany and return to Portugal, to be closer to his family and friends. Despite the difficult circumstances, Kevin was determined to make the most of his time in Guimarães.

      One day, while exploring the city, Kevin stumbled upon a small bar that was in need of a new owner. He saw it as an opportunity to bring a piece of Germany to Portugal, and create a place where people could come together and enjoy the authentic taste of German beer.

      With a vision in his heart and a passion for beer in his soul, Kevin took on the challenge and opened "PROST!". He filled it with the finest German beers and decorated it with traditional German trinkets and memorabilia. He wanted to create an atmosphere that would transport customers to the heart of Germany, and offer them a unique and unforgettable experience.

      As word of Kevin's bar spread, people came from all over the city to taste the authentic German beers and experience the warm and inviting atmosphere. It quickly became a gathering place for people from all walks of life, and a source of inspiration and joy in a time of uncertainty and hardship.

      And so, the bar "PROST!" lives on as a symbol of hope in the heart of the cidade berço!
      <br /><br />
      Era uma vez um jovem chamado Kevin que vivia no coração de Guimarães. Era meio alemão, nascido de uma mãe portuguesa e de um pai alemão. Em miúdo, Kevin sempre foi fascinado pela rica cultura e história da terra do seu pai, e ansiava por experimentá-la por si próprio.

      A pandemia confrontou-o com um futuro incerto, pelo que deixou o seu emprego na Alemanha e regressou a Portugal, para estar mais próximo da sua família e amigos. Apesar das circunstâncias difíceis, Kevin estava determinado a aproveitar ao máximo o seu tempo em Guimarães.

      Um dia, enquanto explorava a cidade, Kevin notou um pequeno bar que precisava de um novo dono. Ele viu nele uma oportunidade de trazer um pedaço da Alemanha para Portugal, e criar um lugar onde as pessoas se pudessem juntar e apreciar o sabor autêntico da cerveja alemã.

      Com essa visão no coração e uma paixão por cerveja, aceitou o desafio e abriu o "PROST!". Encheu-o com as melhores cervejas alemãs, e decorou-o com artigos tradicionais e lembranças da Alemanha. Ele queria criar uma atmosfera que transportasse os clientes para o coração da Alemanha, e oferecer-lhes uma experiência única e inesquecível.

      À medida que o murmúrinho sobre o bar se espalhava, as pessoas vinham de toda a cidade para provar as autênticas cervejas alemãs e experimentar o ambiente caloroso e convidativo. Tornou-se rapidamente um local de encontro para pessoas de todos os estilos de vida, e uma fonte de inspiração e alegria num tempo de incertezas e dificuldades.

      E assim, o bar PROST! vive como um símbolo de esperança no coração da cidade berço.
      </p>
    </AboutTextWrapper>
  )
}

const AboutTextWrapper = styled.div`
  width: 90%;
  font-size: 1.1rem;
  font-weight: 300;
  margin: 2rem auto;
  line-height: 1.9;
  color: ${styles.colors.mainGrey};
  @media (min-width: 768px) {
    width: 75%;
  }
`
