import { ComponentProps, ElementType } from 'react'

import { VariantProps } from '@stitches/react'

import { styled } from '../styles'

export const Button = styled('button', {})

export interface ButtonProps
  extends ComponentProps<typeof Button>,
    VariantProps<typeof Button> {
  as?: ElementType
}
