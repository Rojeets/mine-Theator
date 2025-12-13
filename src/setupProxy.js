const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/omdb',
    createProxyMiddleware({
      target: 'https://www.omdbapi.com',
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        '^/omdb': '',
      },
    })
  );
};
