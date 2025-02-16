const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
  'index': 'Dashboard',
  'calendar': 'Calendar',
  'compose': 'Compose',
  'email': 'Email',
  'forms-deals': 'Deal Detail',
  'customer-page': 'Customer Profile',
  'report': 'Report',
  'datatable-customer': 'Customer Database',
  'datatable-deals': 'Deal Database',
  'credit': 'Credit',
};

module.exports = Object.keys(titles).map(title => {
  return new HtmlWebpackPlugin({
    template: path.join(manifest.paths.src, `${title}.html`),
    path: manifest.paths.build,
    filename: `${title}.html`,
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  });
});
