const webpack = require('webpack');
const pkg = require('./package.json');
const vendor = Object.keys(pkg.dependencies);
 
const publicPath = "/build/";

var proxy = {
    "/api/*": {target: "http://python-china.org", host: "python-china.org"},
    "/session*": {target: "http://python-china.org", host: "python-china.org"},
};

'use strict'
console.log(`vendor : ${vendor}`)
module.exports = {
    entry: {
        app: ["./src/index.js"],
        vendor: vendor
    },

    output: {
        path: __dirname + publicPath,
        filename: '[name].min.js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: function(info) {
            console.log(`------ info: ${info}`)
            return info.resource;
        }
    },

    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
        ],
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
          },
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    ],

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime'],
    },

    devServer: {
        historyApiFallback: true,
        host: '172.19.24.124'
    }
}