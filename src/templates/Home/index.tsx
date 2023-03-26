import { BannerProps } from '../../components/Banner'
import BannerSlider from '../../components/BannerSlider'
import { Container } from '../../components/Container'
import Base from '../Base'
import * as S from './styles'

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
  </Base>
)

export default Home
