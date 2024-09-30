import { ComponentProps } from 'react'

import { VariantProps } from '@stitches/react'

import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps
  extends ComponentProps<typeof MultiStepContainer>,
    VariantProps<typeof MultiStepContainer> {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return (
            <Step
              key={step}
              active={currentStep >= step}
              completed={currentStep > step}
            >
              {step}
            </Step>
          )
        })}
      </Steps>
    </MultiStepContainer>
  )
}
