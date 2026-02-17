import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Design System/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4'],
    },
    weight: {
      control: 'select',
      options: ['bold', 'regular'],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Playground: Story = {
  args: {
    size: 'h1',
    weight: 'bold',
    as: 'h1',
    children: 'Codacomigo',
  },
};

export const Scale: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading size="h1">Heading H1</Heading>
      <Heading size="h2">Heading H2</Heading>
      <Heading size="h3">Heading H3</Heading>
      <Heading size="h4">Heading H4</Heading>
    </div>
  ),
};
