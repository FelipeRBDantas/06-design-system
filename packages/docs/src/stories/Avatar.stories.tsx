import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@feliperbdantas-ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/FelipeRBDantas.png',
    alt: 'Felipe Dantas',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the image is always rendered. When src is undefined, then a fallback image is displayed.',
      },
    },
  },
}
