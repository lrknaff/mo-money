require('babel-register')({
  presets: ['es2015', 'react', 'stage-0']
});

require('babel-polyfill');

global.document = require('jsdom').jsdom(`
  <head>
    <meta charset='UTF-8'>
    <title>Mo Money</title>
  </head>
  <body>
    <div id='react-container'></div>
  </body>
`);

global.window = document.defaultView;
global.navigator = window.navigator;
