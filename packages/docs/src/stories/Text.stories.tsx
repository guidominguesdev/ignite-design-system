import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextProps } from '@nexty-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  size: 'md',
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 512,
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget mi eu justo imperdiet congue id eu orci. Cras vehicula nunc eu mi efficitur porta. Sed porta velit et luctus tempor.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
