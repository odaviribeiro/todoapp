module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@ui': './src/libs/ui',
            '@assets': './src/assets',
            '@ui': './src/libs/utils',
          },
        },
      ],
    ],
  };
};
