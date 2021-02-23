const express = require("express");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");
const path = require("path");
const app = express();
const basicAuth = require("basic-auth-connect");

const username = process.env.BASIC_AUTH_USERNAME;
const password = process.env.BASIC_AUTH_PASSWORD;

if (username && password) {
  app.use(basicAuth(username, password));
}

//we are configuring dist to serve site files
app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.use(history());
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});
const port = process.env.PORT || 8080;
app.listen(port);
console.log(`site is listening on port: ${port}`);
