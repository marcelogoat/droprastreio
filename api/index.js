// api/index.js — Serverless Function Entrypoint para a Vercel
const handler = require('../server.js');

module.exports = (req, res) => {
  // Garantir que a URL original seja preservada mesmo após rewrite da Vercel
  if (req.headers && req.headers['x-matched-path'] && req.headers['x-matched-path'].startsWith('/api')) {
    req.url = req.headers['x-matched-path'];
  } else if (req.headers && req.headers['x-forwarded-uri'] && req.headers['x-forwarded-uri'].startsWith('/api')) {
    req.url = req.headers['x-forwarded-uri'];
  } else if (req.url && req.url.includes('__url=')) {
    const match = req.url.match(/__url=([^&]+)/);
    if (match) {
      req.url = decodeURIComponent(match[1]);
    }
  }

  return handler(req, res);
};
