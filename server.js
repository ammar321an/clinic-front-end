const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    const mode = dev ? 'Development' : 'Production';
    console.log(`> ${mode} server running on port ${port}`);
  });
});