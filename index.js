const highlight = require("highlight.js");
const fs = require('fs');
const path = require('path');

const stdin = process.stdin;
const stdout = process.stdout;
var input = "";

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  input += chunk;
});

stdin.on('end', function () {
  html = highlight.highlight("ruby", input, true);
  process.stdout.write("<!doctype html><html><body><style>");
  process.stdout.write(fs.readFileSync(path.join(__dirname, 'node_modules/highlight.js/styles/solarized-dark.css')));
  process.stdout.write("</style><pre><code class=\"hljs\" style=\"background:none; font-family: Consolas\">");
  process.stdout.write(html.value);
  process.stdout.write("</code></pre></body></html>");
});
