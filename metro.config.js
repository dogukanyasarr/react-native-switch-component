const { getDefaultConfig } = require('metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = wrapWithReanimatedMetroConfig({
  ...defaultConfig,
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'cjs'], // CJS modüllerini destekle
  },
});
