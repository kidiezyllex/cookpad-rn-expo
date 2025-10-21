const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname);

// Tối ưu hóa Metro bundler cho development
config.resolver.platforms = ['ios', 'android', 'native', 'web'];
config.resolver.sourceExts.push('cjs');

// Fix source map issues
config.transformer.enableBabelRCLookup = false;
config.transformer.enableBabelRuntime = false;

// Disable source maps in development to prevent <anonymous> file errors
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Fix for Metro bundler source map issues
config.serializer = {
  ...config.serializer,
  getModulesRunBeforeMainModule: () => [],
};

// Tối ưu hóa cho development
if (process.env.NODE_ENV === 'development') {
  // Disable source maps to prevent <anonymous> file errors
  config.transformer.minifierPath = require.resolve('metro-minify-terser');
  config.transformer.minifierConfig = {
    ecma: 8,
    keep_fnames: true,
    mangle: {
      keep_fnames: true,
    },
  };
}
 
module.exports = withNativeWind(config, { input: './global.css' })