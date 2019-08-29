const webpack = require('webpack');
const webpackConfig = require('./webpack/webpack.config');
const simpleGit = require('simple-git');

new Promise((resolve, reject) => {
  webpack({ mode: 'development', ...webpackConfig }).run((err, stats) => {
    if (err) {
      reject(err);
    } else {
      console.log(stats.toString(webpackConfig.stats));
      resolve();
    }
  });
}).then(() => {
  console.log('deploy docs start');
  simpleGit()
    .add('.')
    .commit('chore: update docs pages')
    .push(['origin', 'master'], () => console.log('deploy docs done'));
});