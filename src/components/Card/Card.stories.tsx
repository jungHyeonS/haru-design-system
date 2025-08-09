import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CardProps } from './Card';
import Card from './Card';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: 'text',
      description: 'Content inside the card',
      defaultValue: 'Card Content',
    },
  },
};
export default meta;
type Story = StoryObj<CardProps>;
export const Default: Story = {
  args: {
    size: 'md',
    children: 'This is a default card',
  },
};
