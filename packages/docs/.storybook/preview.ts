import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark'
    },
    darkMode: {
      current: 'dark',
      dark: { ...themes.dark },
      light: { ...themes.light },
    },
  },
};

export default preview;
