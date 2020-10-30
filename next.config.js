const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@adobe/react-spectrum', '@spectrum-icons/.*', '@react-spectrum/.*']);
const withImages = require('next-images');

const nextConfig = withImages({
    webpack(config, options) {
        return config;
    },
});

module.exports = withPlugins([withCSS, withTM], nextConfig);
