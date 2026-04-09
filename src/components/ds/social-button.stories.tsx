import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FacebookIcon from '../icons/facebook';
import GoogleIcon from '../icons/google';
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
    <div className="bg-[#ffffff] p-8">
      <div className="w-[150px]">
        <SocialButton {...args} />
      </div>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SocialButton>;

export const Google: Story = {
  args: {
    label: 'Google',
    icon: <GoogleIcon />,
  },
};
export const Facebook: Story = {
  args: {
    label: 'Facebook',
    icon: <FacebookIcon />,
  },
};
