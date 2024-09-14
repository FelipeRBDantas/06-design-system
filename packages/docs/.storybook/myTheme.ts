import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Ignite UI',
  brandUrl: 'https://example.com.br',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  colorPrimary: '#00B37E',
  colorSecondary: '#7C7C8A',

  appBg: '#00291D',
  appContentBg: '#00291D',
  appPreviewBg: '#00291D',
  appBorderColor: '#015F43',
  appBorderRadius: 4,

  textInverseColor: '#10162F',
  textColor: '#ffffff',

  barTextColor: '#ffffff',
  barSelectedColor: '#00291D',
  barHoverColor: '#00291D',
  barBg: '#015F43',

  inputBg: '#015F43',
  inputBorder: '#015F43',
  inputTextColor: '#ffffff',
  inputBorderRadius: 2,
});
