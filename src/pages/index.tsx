import Home from '../templates/Home'
import bannersMock from 'components/BannerSlider/mock'

export default function Index() {
  return <Home banners={bannersMock} />
}
