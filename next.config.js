const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');


module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  [withTypescript],
  [withCss],
  // your other plugins here

]);
