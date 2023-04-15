import React from 'react'

import Heading from '../Heading'
import { Container } from '../Container'

import * as S from './styles'

const SectionAboutRBLog = () => (
  <S.Wrapper>
    <S.Container>
      <S.Image>
        <img
          src={'/img/missao.jpg'}
          loading="lazy"
          alt="Pessoa segurando caixa com principais objetivos da RBLog"
        />
      </S.Image>
      <div>
        <Heading color="black" size="huge">
          RBLog
        </Heading>
        <Heading color="black" lineLeft lineColor="secondary" size="medium">
          Qual é a missão da RBLog
        </Heading>
        <S.Text>
          <p>
            Buscamos trabalhar com eficiência e inteligência, levando os nossos
            clientes cada vez mais longe.
          </p>
        </S.Text>
      </div>
    </S.Container>
  </S.Wrapper>
)

export default SectionAboutRBLog
