const withPlugins = require("next-compose-plugins");
const { i18n } = require('./next-i18next.config');

module.exports = withPlugins([], {});

module.exports = {
  i18n,
  env: {
  },
  trailingSlash: true,
}
