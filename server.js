const express = require('express');
const app = express();
const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
});

app.use(express.static("public"));
app.use(express.static("node_modules/font-awesome"));

import { createApp } from './js/entry-server.js';
console.log(createApp);

app.get('/', (req, res) => {
  const app = createApp();

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html);
  })
})

app.listen(3000, () => console.log("Listening on port 3000"));
