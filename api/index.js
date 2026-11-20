// api/index.js — Serverless Function Entrypoint para a Vercel
const handler = require('../server.js');

module.exports = (req, res) => {
  return handler(req, res);
};
