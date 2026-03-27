import { create } from 'storybook/theming';

export const darkTheme = create({
  base: 'dark',

  colorPrimary: '#b22d00',

  appBg: '#0a0a0a',
  appContentBg: '#0a0a0a',
  appBorderColor: '#262626',

  textColor: '#fafafa',
  textInverseColor: '#0a0a0a',

  barBg: '#b22d00',
  barTextColor: '#fafafa',
  barSelectedColor: '#b22d00',

  inputBg: '#0a0a0a',
  inputBorder: '#262626',
  inputTextColor: '#fafafa',
});
