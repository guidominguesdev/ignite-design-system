import type { StoryObj, Meta } from '@storybook/react'
import { Box, Avatar, AvatarProps } from '@nexty-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/guidominguesdev.png',
    alt: 'Gui Domingues',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            all: 'unset',
            width: '$80',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
