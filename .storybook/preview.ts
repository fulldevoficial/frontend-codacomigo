import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import { darkTheme } from "./themes";

import "../src/styles/globals.css";
import "./fonts.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "dark",
      parentSelector: "html",
    }),
  ],

  parameters: {
    layout: "centered",
    docs: {
      theme: darkTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
