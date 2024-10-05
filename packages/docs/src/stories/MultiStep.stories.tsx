import type { StoryObj, Meta } from '@storybook/react'

import { Box, MultiStep, MultiStepProps } from '@feliperbdantas-ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  argTypes: {
    size: {
      control: {
        type: 'number',
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
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the text is always rendered with the `currentStep` property being `1`, but we can change this to `4` as being the same value as the number of steps defined in `size`.',
      },
    },
  },
}
