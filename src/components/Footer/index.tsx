import Link from 'next/link'

import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sac@wongame.com">sac@wongames.com</a>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Redes sociais
        </Heading>

        <nav aria-labelledby="social media">
          <Link
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </Link>
          <Link
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </Link>
          <Link
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/" legacyBehavior>
            Home
          </Link>
          <Link href="/games" legacyBehavior>
            Sobre
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>RBLog 2023 © Todos os direitos reservados.</S.Copyright>
  </S.Wrapper>
)

export default Footer
