import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SocialButton } from './social-button';

const meta: Meta<typeof SocialButton> = {
  title: 'Design System/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  args: {
    label: 'Default',
    icon: null,
  },
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
    <div className="w-[150px]">
      <SocialButton {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SocialButton>;

export const Google: Story = {
  args: {
    label: 'Google',
    icon: <img src="/images/google.png" alt="Google icon" />,
  },
};
export const Facebook: Story = {
  args: {
    label: 'Facebook',
    icon: <img src="/images/facebook.png" alt="Facebook icon" />,
  },
};
