export default {
  "publicPath": "/static/",
  "proxy": {
    "/api": {
      "target": "http://localhost:3000/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
}
