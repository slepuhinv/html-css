const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/second.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        watchContentBase: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};