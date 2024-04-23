const path = require('path');

module.exports = {
  entry: {
    'ng-template-widget': [
      path.resolve(__dirname, 'dist/main.js')
    ]
  },
  output: {
    filename: '[name].vendor.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
