module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@config': './src/config',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
