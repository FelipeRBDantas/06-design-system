import { VariantProps } from '@stitches/react'

import { ComponentProps } from '../types'

import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxComponentProps extends ComponentProps<typeof Box> {}

export interface BoxProps extends VariantProps<BoxComponentProps> {}
