import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Ignite UI',
  brandUrl: 'https://example.com.br',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  colorPrimary: '#00FF85',
  colorSecondary: '#007F5F',

  appBg: '#002B36',
  appContentBg: '#002B36',
  appPreviewBg: '#002B36',
  appBorderColor: '#007F5F',
  appBorderRadius: 8,

  textInverseColor: '#E6FFFA',
  textColor: '#FFFFFF',

  barTextColor: '#FFFFFF',
  barSelectedColor: '#00FF85',
  barHoverColor: '#007F5F',
  barBg: '#004D40',

  inputBg: '#004D40',
  inputBorder: '#007F5F',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 5,
});
