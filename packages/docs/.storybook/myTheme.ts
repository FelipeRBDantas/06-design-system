import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Forest UI',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  colorPrimary: '#00FF85', // Verde vibrante
  colorSecondary: '#007F5F', // Verde floresta

  appBg: '#002B36', // Fundo do app verde escuro
  appContentBg: '#002B36',
  appPreviewBg: '#002B36',
  appBorderColor: '#007F5F', // Borda verde escura
  appBorderRadius: 8,

  textInverseColor: '#E6FFFA', // Texto claro sobre fundo escuro
  textColor: '#FFFFFF',

  barTextColor: '#FFFFFF',
  barSelectedColor: '#00FF85', // Barra selecionada verde
  barHoverColor: '#007F5F', // Cor da barra ao passar o mouse
  barBg: '#004D40', // Fundo da barra verde escuro

  inputBg: '#004D40', // Fundo dos inputs verde escuro
  inputBorder: '#007F5F',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 5,
});
