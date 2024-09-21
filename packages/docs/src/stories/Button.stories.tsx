import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the button always renders as `primary`, but we can change this with the `variant` property. In this case, set to `secondary`. Typically used for secondary actions.',
      },
    },
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the button always renders as `primary`, but we can change this with the `variant` property. In this case, set to `tertiary`. Typically used for cancel button patterns.',
      },
    },
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the button always renders as `md`, but we can change this with the `size` property. In this case, set it to `sm` for smaller sizes.',
      },
    },
  },
}
