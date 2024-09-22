import { ComponentProps } from 'react'

import { VariantProps } from '@stitches/react'

import { Check } from 'phosphor-react'

import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer>,
    VariantProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
