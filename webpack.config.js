const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                   'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: "./dist",
        watchFiles: ["src/*."],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Page",
            filename: "index.html",
            scriptLoading: "defer",
            template: "./src/index.html",
        }),
    ],
};
