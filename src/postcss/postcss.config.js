/**
 * PostCSS configuration file
 *
 * @docs https://postcss.org/
 * @since 1.0.0
 */
const autoprefixer = require('autoprefixer');
const postcssPrefixSelector = require('postcss-prefix-selector');

// eslint-disable-next-line no-unused-vars
module.exports = (postcssOptions) => {
  const { prefix: cssSelectorPrefix } = postcssOptions || {};

  const postCssPrefixer =
    cssSelectorPrefix &&
    postcssPrefixSelector({
      prefix: postcssOptions.prefix,
      transform(prefix, selector, prefixedSelector, filepath) {
        if (selector.match(/^(html|body)/)) {
          return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
        }

        if (filepath.match(/node_modules/)) {
          return selector; // Do not prefix styles imported from node_modules
        }

        return prefixedSelector;
      },
    });

  // If we use Sass+PostCSS then we only need the autoprefixer
  return {
    plugins: [
      // To parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
      // https://github.com/postcss/autoprefixer
      autoprefixer,
      ...[postCssPrefixer],
      ...(postcssOptions.plugins || []),
    ],
  };
};
