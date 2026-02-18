import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SubmitButton } from './submit-button';

const meta: Meta<typeof SubmitButton> = {
  title: 'Design System/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  args: {
    children: 'Enviar',
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Exibe o spinner e desabilita o botão',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão manualmente',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
