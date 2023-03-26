import { Story, Meta } from '@storybook/react/types-7-0'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as unknown as Meta<ButtonProps>

export const Basic: Story<ButtonProps> = (args: any) => <Button {...args} />

Basic.args = {
  children: 'Buy Now'
}

export const WithIcon: Story = (args: any) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}

export const AsLink: Story = (args: any) => <Button {...args} />

AsLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: 'a',
  href: '/teste'
}
