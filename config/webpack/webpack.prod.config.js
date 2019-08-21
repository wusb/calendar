const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    calendar: './src/calendar.js'
  },
  output: {
    path: path.resolve(__dirname, '../../lib'),
    publicPath: '/lib/',
    libraryTarget: 'umd',
    library: 'calendar'
  }
};