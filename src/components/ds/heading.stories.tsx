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
      options: ['xl', 'lg', 'md', 'sm'],
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
    size: 'xl',
    weight: 'bold',
    as: 'h1',
    children: 'Codacomigo',
  },
};

export const Scale: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading size="xl">Heading H1</Heading>
      <Heading size="lg">Heading H2</Heading>
      <Heading size="md">Heading H3</Heading>
      <Heading size="sm">Heading H4</Heading>
    </div>
  ),
};
