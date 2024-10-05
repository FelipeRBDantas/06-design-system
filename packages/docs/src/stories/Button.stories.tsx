import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@feliperbdantas-ignite-ui/react'

import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
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

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the button always renders with the `children` property being text, but we can change this by assigning text to an icon.',
      },
    },
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'By default, the button always renders as `enabled`, but we can change this with the `disabled` property. In this case, set it to `disabled` for disabled buttons.',
      },
    },
  },
}
