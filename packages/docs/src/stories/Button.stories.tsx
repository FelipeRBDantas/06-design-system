import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Send',
  },
}
