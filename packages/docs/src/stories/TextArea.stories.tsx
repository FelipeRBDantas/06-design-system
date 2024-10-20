import type { StoryObj, Meta } from '@storybook/react'

import {
  Box,
  Text,
  TextArea,
  TextAreaProps,
} from '@feliperbdantas-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
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
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the text area is always rendered enabled. But we can change this by assigning a boolean value like `true` to the `disabled` property.',
      },
    },
  },
}
