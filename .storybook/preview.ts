import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "base",
      values: [
        {
          name: "base",
          value: "#CDCDCD",
        },
        {
          name: "white",
          value: "white",
        },
      ],
    },
  },
};

export default preview;
