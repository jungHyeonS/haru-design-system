import type { Meta, StoryObj } from '@storybook/react-vite';
import ProgressBar, { type ProgressBarProps } from './ProgressBar';

const meta: Meta<ProgressBarProps> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'outline'],
    },
    width: {
      control: 'text',
      description: 'Width of the progress bar, e.g., "w-[500px]" or "w-full"',
      defaultValue: 'w-[500px]',
    },
    label: {
      control: 'text',
      description: 'Label displayed above the progress bar',
      defaultValue: '',
    },
    value: {
      control: 'number',
      description: 'Current value of the progress bar, e.g., 50',
      defaultValue: 0,
    },
    isPercent: {
      control: 'boolean',
      description: 'Display value as a percentage',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<ProgressBarProps>;

export const Default: Story = {};

export const Small: Story = { args: { size: 'sm' } };
export const Medium: Story = { args: { size: 'md' } };
export const Large: Story = { args: { size: 'lg' } };
