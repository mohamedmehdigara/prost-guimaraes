import React from "react"

import { styles, Section, SectionButton } from "../../utils"

import styled from "styled-components"

export default function AboutText() {
  return (
    <AboutTextWrapper>
      <p>
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
