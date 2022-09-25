import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Headers, Img, Li, Navbar, Profile, Ul, Itens } from './styles'

const Header = ({ img }) => (
  <BrowserRouter>
    <Headers>
      <Navbar>
        <Profile>
          <Img src={img} alt="profile_picture" />
        </Profile>
        <Ul>
          <Li>
            <Itens to="#about">Sobre</Itens>
          </Li>
          <Li>
            <Itens to="#experience">Experiência</Itens>
          </Li>
          <Li>
            <Itens to="#skills">Habilidades</Itens>
          </Li>
          <Li>
            <Itens to="#projects">Projetos</Itens>
          </Li>
        </Ul>
      </Navbar>
    </Headers>
  </BrowserRouter>
)

export default Header
