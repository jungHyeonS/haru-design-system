import type { Meta, StoryObj } from '@storybook/react-vite';
import Dropdown, { type DropdownOption, type DropdownProps } from './Dropdown';

const options: DropdownOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    options,
    placeholder: 'Select an option',
  },
};
