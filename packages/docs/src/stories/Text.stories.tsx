import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@feliperbdantas-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto, aut ipsa, ratione quasi labore veritatis esse, dolor necessitatibus minima earum. Quae delectus expedita assumenda voluptates hic temporibus veniam aliquam?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default the text always renders an `normal`, but we can change this with the `as` property.',
      },
    },
  },
}
