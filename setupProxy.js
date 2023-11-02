const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/", {
      target: "http://localhost:8000/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/message", {
      target: "http://localhost:8000/message",
      changeOrigin: true,
    })
  );
};
