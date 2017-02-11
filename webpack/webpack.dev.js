var rules = require("./rules");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var os = require('os');
var proxyMiddleware = require('http-proxy-middleware');

var jsonPlaceholderProxy = proxyMiddleware('/phones/phones.json', {
    target: '/api',
    onProxyReq: function(proxyReq, req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify([]));
    }
});

module.exports = {
    entry: ['./app/index.ts'],
    output: {
        filename: 'build.js',
        path: 'dev'
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
        extensions: ['.ts', '.js', '.json']
    },
    devtool: "inline-eval-cheap-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            // host: os.hostname().toLowerCase() + ".dev",
            port: 8443,
            server: {
                baseDir: 'dev',
                middleware: [jsonPlaceholderProxy],
            },
            https: false,
            ui: false,
            online: false,
            notify: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        })
    ],
    module:{
        rules: rules
    }
};