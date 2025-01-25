import type { Meta, StoryObj } from '@storybook/react'

import TextMessagesPage from './TextMessagesPage'

const meta: Meta<typeof TextMessagesPage> = {
  component: TextMessagesPage,
}

export default meta

type Story = StoryObj<typeof TextMessagesPage>

export const Primary: Story = {}
