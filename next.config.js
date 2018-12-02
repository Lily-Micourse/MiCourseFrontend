const withTypescript = require("@zeit/next-typescript");
const withImages = require('next-images');
const withCss = require("@zeit/next-css");


const plugins = [
  withCss,
  withImages,
  withTypescript
];

module.exports = plugins.reduce((prev, curr) => curr(prev), {});
