import React, { ComponentProps, forwardRef, ElementType } from 'react'
import { LinkButton as StyledLinkButton, LinkButtonLabel } from './styles'

export interface LinkButtonProps
  extends ComponentProps<typeof StyledLinkButton> {
  as?: ElementType
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

export const LinkButton = forwardRef<
  React.ElementRef<typeof StyledLinkButton>,
  LinkButtonProps
>(({ children, leftIcon, rightIcon, ...props }, forwardRef) => {
  return (
    <StyledLinkButton ref={forwardRef} {...props}>
      <LinkButtonLabel>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </LinkButtonLabel>
    </StyledLinkButton>
  )
})

LinkButton.displayName = 'LinkButton'
