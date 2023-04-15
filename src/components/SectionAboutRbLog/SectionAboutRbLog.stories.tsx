import { Story, Meta } from '@storybook/react/types-6-0'
import SectionAboutRbLog from '.'

export default {
  title: 'SectionAboutRbLog',
  component: SectionAboutRbLog
} as Meta

export const Basic: Story = (args) => <SectionAboutRbLog {...args} />
