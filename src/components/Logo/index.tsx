import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({
  id = 'logo',
  color = 'white',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <img src="/img/logoRBLog.png" alt="logo RBLog" title="RBLog" />
  </S.Wrapper>
)

export default Logo
