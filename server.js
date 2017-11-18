const express = require('express');
const app = express();
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

app.use(express.static("public"));
app.use(express.static("node_modules/font-awesome"));

app.get('/', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

app.listen(3000, () => console.log("Listening on port 3000"));
