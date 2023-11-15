import Counter from './counter.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof Counter>

const meta: Meta<typeof Counter> = {
  title: 'Module/Counter',
  component: Counter,
  tags: ['autodocs']
}
export const Default: Story = {
  args: {}
}
export default meta
