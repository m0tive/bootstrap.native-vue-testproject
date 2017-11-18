const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.static("node_modules/font-awesome"));
app.listen(3000, () => console.log("Listening on port 3000"));
