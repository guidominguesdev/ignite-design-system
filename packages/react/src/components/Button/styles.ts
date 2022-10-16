import { styled } from '../../styles'

export const ButtonLabel = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  svg: {
    width: '$4',
    height: '$4',
  },
})

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '0 $4',
  cursor: 'pointer',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$nexty500',
        '&:disabled': {
          backgroundColor: '$gray200',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$nexty300',
        },
      },
      secondary: {
        color: '$nexty300',
        border: '2px solid $nexty500',
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$nexty500',
          color: '$white',
        },
      },
      tertiary: {
        color: '$gray100',
        '&:disabled': {
          color: '$gray600',
        },
        '&:not(:disabled):hover': {
          color: '$white',
        },
      },
    },
    size: {
      sm: {
        height: '$8',
      },
      md: {
        height: '$10',
      },
    },
    full: {
      true: {
        width: '100%',
      },
    },
    loading: {
      true: {
        [`${ButtonLabel}`]: {
          visibility: 'hidden',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export const ButtonLoading = styled('span', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
