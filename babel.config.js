module.exports = {
    presets: ['babel-preset-expo'], // Or 'module:metro-react-native-babel-preset' for bare React Native
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
  