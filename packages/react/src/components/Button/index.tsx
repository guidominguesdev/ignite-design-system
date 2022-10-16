import React, { ComponentProps } from 'react'
import { Button as StyledButton, ButtonLoading, ButtonLabel } from './styles'

import { Spinner } from '../Spinner'

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  loading?: boolean
}

export function Button({
  children,
  leftIcon,
  rightIcon,
  loading,
  ...props
}: ButtonProps) {
  return (
    <StyledButton loading={loading} {...props}>
      <ButtonLabel>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </ButtonLabel>

      {loading && (
        <ButtonLoading>
          <Spinner />
        </ButtonLoading>
      )}
    </StyledButton>
  )
}

Button.displayName = 'Button'
