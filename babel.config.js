module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
          root: ['./'],
          alias: {
            // This needs to be mirrored in tsconfig.json
            '~/assets': './assets',
            '~/components': './src/components',
            '~/constants': './src/constants',
            '~/data': './src/data',
            '~/env': './env',
            '~/screens': './src/screens',
            '~/navigation': './src/navigation',
            '~/store': './src/store',
            '~/translations': './src/translations',
            "underscore": 'lodash'
          },
        },
      ], 'react-native-reanimated/plugin']
  };
};
