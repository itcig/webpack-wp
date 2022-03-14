/**
 * PostCSS configuration file
 *
 * @docs https://postcss.org/
 * @since 1.0.0
 */
const autoprefixer = require('autoprefixer');

// eslint-disable-next-line no-unused-vars
module.exports = (projectOptions) => {
  const postcssOptions = {};

  // If we use Sass+PostCSS then we only need the autoprefixer
  Object.assign(postcssOptions, {
    plugins: [
      // To parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
      // https://github.com/postcss/autoprefixer
      autoprefixer,
    ],
  });

  return {
    postcssOptions,
  };
};
