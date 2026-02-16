import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Design System/Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sub1", "sub2", "p1", "p2", "small"],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold"],
    },
    tone: {
      control: "select",
      options: ["default", "muted"],
    },
    as: {
      control: "select",
      options: ["p", "span", "label", "strong"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    size: "p1",
    weight: "regular",
    tone: "default",
    children: "Esse é um texto do design system.",
  },
};

export const Scale: Story = {
  render: () => (
    <div className="space-y-3">
      <Text size="sub1">Sub1</Text>
      <Text size="sub2">Sub2</Text>
      <Text size="p1">Paragraph 1</Text>
      <Text size="p2">Paragraph 2</Text>
      <Text size="small">Small</Text>
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div className="space-y-3">
      <Text tone="default">Default tone</Text>
      <Text tone="muted">Muted tone</Text>
    </div>
  ),
};
