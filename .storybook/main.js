/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
  "../src/**/*.mdx", 
  "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;


// module.exports={
//   "stories":[
//     "../src/**/*.stories.mdx", 
//   "../src/**/*.stories.@(js|jsx|ts|tsx)" 
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-interactions",
//   ]

// }
