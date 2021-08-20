var ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/tinyworldgame/tinyworldgame.github.io.git'
}, function(err) {
  console.error(err);
});
