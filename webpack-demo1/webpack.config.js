const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'index.js'
        filename: 'index.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'hmx',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["css-loader"],
        }, ],
    },
};
