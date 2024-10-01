import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    prefix: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the text field is always rendered enabled. But we can change this by assigning a boolean value like `true` to the `disabled` property.',
      },
    },
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the text field is always rendered without a prefix. But we can change this by assigning a value like text to the `prefix` property.',
      },
    },
  },
}
