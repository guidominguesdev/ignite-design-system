import { styled } from 'styles'

export const LinkButtonLabel = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '* + *': {
    marginLeft: '$2',
  },
  svg: {
    width: '$4',
    height: '$4',
  },
  '> span': {
    position: 'relative',
    '&::before': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 0,
      height: 1,
      transition: 'width 0.2s ease 0s',
    },
  },
})

export const LinkButton = styled('a', {
  all: 'unset',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'color $transitions$fast ease 0s',
  '&:disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  '&:hover': {
    [`${LinkButtonLabel}`]: {
      '> span': {
        '&::before': {
          width: '100%',
        },
      },
    },
  },
  variants: {
    variant: {
      primary: {
        [`${LinkButtonLabel}`]: {
          $$baseColor: '$colors$nexty300',
          color: '$$baseColor',
          '> span': {
            '&::before': {
              backgroundColor: '$$baseColor',
            },
          },
        },
      },
      secondary: {
        [`${LinkButtonLabel}`]: {
          $$baseColor: '$colors$gray200',
          color: '$$baseColor',
          '> span': {
            '&::before': {
              backgroundColor: '$$baseColor',
            },
          },
        },
      },
      tertiary: {
        [`${LinkButtonLabel}`]: {
          $$baseColor: '$colors$gray300',
          color: '$$baseColor',
          '> span': {
            '&::before': {
              backgroundColor: '$$baseColor',
            },
          },
        },
      },
    },
    size: {
      sm: {
        height: '$5',
        fontSize: '$sm',
      },
      md: {
        height: '$6',
        fontSize: '$md',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})
