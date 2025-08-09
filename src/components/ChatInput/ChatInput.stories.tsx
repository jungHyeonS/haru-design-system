import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ChatInputProps } from './ChatInput';
import ChatInput from './ChatInput';

const meta: Meta<ChatInputProps> = {
  title: 'Components/ChatInput',
  component: ChatInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
      defaultValue: 'Type your message here...',
    },
  },
};
export default meta;
type Story = StoryObj<ChatInputProps>;
export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};
