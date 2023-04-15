import { screen, render } from '@testing-library/react'
import SectionAboutRbLog from '.'

describe('<SectionAboutRbLog />', () => {
  it('should render the heading', () => {
    const { container } = render(<SectionAboutRbLog />)
    expect(
      screen.getByRole('heading', { name: /SectionAboutRbLog/i })
    ).toBeInTheDocument()
  })
})
