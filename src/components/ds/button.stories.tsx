import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FacebookIcon from '../icons/facebook';
import GoogleIcon from '../icons/google';
import { Button } from '../ui/button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Conteúdo do botao',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão manualmente',
    },
    onClick: {
      action: 'clicked',
    },
  },
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="flex justify-center">
      <Button {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Google: Story = {
  args: {
    variant: 'social',
    size: 'social',
    children: (
      <>
        <GoogleIcon className="size-6 shrink-0" />
        Google
      </>
    ),
  },
};

export const Facebook: Story = {
  args: {
    variant: 'social',
    size: 'social',
    children: (
      <>
        <FacebookIcon className="size-6 shrink-0" />
        Facebook
      </>
    ),
  },
};
