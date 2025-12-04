const next = require('next');
const express = require('express');

// Auto-detect from cPanel's NODE_ENV setting
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Handle all requests through Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Use cPanel assigned port or default
  const port = process.env.PORT || 3000;

  server.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    const mode = dev ? 'Development' : 'Production';
    console.log(`> ${mode} server running on port ${port}`);
  });
});