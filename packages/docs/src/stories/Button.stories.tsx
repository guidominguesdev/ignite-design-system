import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@nexty-ui/react'

import { ChatCenteredText, Eye } from 'phosphor-react'

const iconArgType = {
  options: ['noIcon', 'ChatCenteredText', 'Eye'],
  mapping: {
    noIcon: null,
    ChatCenteredText: <ChatCenteredText size={16} weight="bold" />,
    Eye: <Eye size={16} weight="bold" />,
  },
  control: {
    type: 'select',
    labels: {
      noIcon: 'No icon',
    },
  },
}

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'md',
    full: false,
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    full: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    leftIcon: iconArgType,
    rightIcon: iconArgType,
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Full: StoryObj<ButtonProps> = {
  args: {
    full: true,
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    loading: true,
  },
}
