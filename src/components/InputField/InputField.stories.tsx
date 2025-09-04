import  { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react-vite";
import InputField from './InputField';

const meta: Meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the input field',
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email'],
      },
      description: 'The type of the input field (e.g., text, password, email)',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the input field',
    },
    value: {
      control: 'text',
      description: 'The current value of the input field',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when the input value changes',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the input field',
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'name@example.com',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const PasswordField: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '8자 이상 입력하세요',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'name@example.com',
    value: 'invalid@example',
    errorMessage: '유효한 이메일 주소를 입력해주세요.',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};
