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
          Contato
        </Heading>

        <a href="mailto:sac@rblog.com">sac@rblog.com</a>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Redes sociais
        </Heading>

        <nav aria-labelledby="social media">
          <Link
            href="https://www.instagram.com/rblogtransporteseencomendas"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </Link>
          <Link
            href="https://web.whatsapp.com/send?phone=55998222182"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            WhatsApp
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
          Localização
        </Heading>
        <span>Jose da Cruz Badega, 164</span>
        <span>Bairro Tiradentes</span>
        <span>Tupaciguara, Minas Gerais.</span>
        <span>CEP: 38480-000</span>
      </S.Column>
    </S.Content>
    <S.Copyright>RBLog 2023 © Todos os direitos reservados.</S.Copyright>
  </S.Wrapper>
)

export default Footer
