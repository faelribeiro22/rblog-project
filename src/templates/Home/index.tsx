import { BannerProps } from '../../components/Banner'
import BannerSlider from '../../components/BannerSlider'
import { Container } from '../../components/Container'
import Base from '../Base'
import * as S from './styles'
import SectionAboutRBLog from 'components/SectionAboutRbLog'

export type HomeTemplateProps = {
  banners: BannerProps[]
}

const Home = ({ banners }: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>
    <Container>
      <SectionAboutRBLog />
    </Container>
  </Base>
)

export default Home
