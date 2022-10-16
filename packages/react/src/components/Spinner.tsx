import { ComponentProps, ElementType } from 'react'
import { keyframes, styled } from '../styles'

export const Rotate360 = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Spinner = styled('span', {
  $$size: '$space$4',
  $$baseColor: '$colors$gray100',
  $$borderWidth: '$borderWidths$thick',

  width: '$$size',
  height: '$$size',
  display: 'block',
  position: 'relative',
  boxSizing: 'border-box',
  '&::before, &::after': {
    content: '',
    boxSizing: 'inherit',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '$full',
    borderRightColor: 'transparent',
    borderWidth: '$$borderWidth',
    borderStyle: 'solid',
  },
  '&::after': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: '$$baseColor',
    opacity: '$medium',
  },
  animation: `0.6s linear 0s infinite normal none running ${Rotate360}`,
})

export interface SpinnerProps extends ComponentProps<typeof Spinner> {
  as?: ElementType
}

Spinner.displayName = 'Spinner'
