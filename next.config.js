const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@adobe/react-spectrum', '@spectrum-icons/.*', '@react-spectrum/.*']);

module.exports = withPlugins([withCSS, withTM], {
    // Your next configuration
});
