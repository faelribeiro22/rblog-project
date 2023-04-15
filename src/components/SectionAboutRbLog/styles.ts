import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
    `}
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.medium};

    ${media.greaterThan('large')`
    grid-template-columns: 1fr 1fr;
      padding: 0 ${theme.spacings.medium};
    `}
  `}
`

export const Image = styled.picture`
  max-width: 100%;

  img {
    display: block;
    max-width: min(40rem, 100%);
    margin: 0 auto;

    ${media.lessThan('medium')`
      max-width: 100%;
    `}
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    p {
      color: ${theme.colors.texts};
      margin-bottom: ${theme.spacings.small};
    }

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`
