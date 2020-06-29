module.exports = {
  stories: ["../stories/**/*.stories.[tj]sx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            configFile: "tsconfig.storybook.json"
          }
        },
        {
          loader: "react-docgen-typescript-loader"
        }
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
}
