import React from 'react'

import Title from '../Titlte/index'
import Card from '../Cards/index'
import SubTitle from '../SubTitle'
import { Highlight, Info } from '../Cards/styles'
import { SectionHeading, Sections } from './styles'

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto="Ola Pessoal, sou o" />
      <SectionHeading>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado} - {profile.contato}
        <Highlight> {profile.email} </Highlight>
      </Info>
      <div id="contacts">
        <Title texto="Contatos" />
        <SubTitle texto="Em desenvolvimento ACQA" />
      </div>
    </Sections>
    <Sections id="experience">
      <Title texto="Experiência" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          subTitle={val.cargo}
          subTitleH3={val.empresa}
          date={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title texto="Habilidades" />
      <SubTitle texto="Em desenvolvimento ACQA" />
    </Sections>
    <Sections id="projects">
      <Title texto="Projetos" />
      <SubTitle texto="Em desenvolvimento ACQA" />
    </Sections>
  </>
)

export default Section
