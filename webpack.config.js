const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ["es2015"] }
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new CopyWebpackPlugin([
            {
                from: "./src/css/",
            },
        ])
    ]
};
