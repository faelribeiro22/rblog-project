import Button from '../Button'
import Ribbon, { RibbonColors, RibbonSize } from '../Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel?: string
  buttonLink?: string
  ribbon?: string
  ribbonSize?: RibbonSize
  ribbonColor?: RibbonColors
}

const Banner = ({
  img,
  title,
  buttonLabel,
  buttonLink,
  subtitle,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary'
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      {!!buttonLabel ? (
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      ) : null}
    </S.Caption>
  </S.Wrapper>
)

export default Banner
