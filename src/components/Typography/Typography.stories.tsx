import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'label'],
    },
    children: {
      control: 'text',
    },
    as: {
      control: 'text',
      description: 'Optional. Render the component as a different HTML element.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'This is a body text.',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'This is a label text.',
  },
};

export const CustomElement: Story = {
  args: {
    variant: 'body',
    as: 'span',
    children: 'This body text is rendered as a span.',
  },
};
