import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
        repudiandae iusto nisi voluptate ex quisquam, tempore nostrum, odio
        aliquam numquam illum quam eum eligendi error consequatur atque.
        Voluptatem, consequatur quas.
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
