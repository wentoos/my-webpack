const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    devtool:"source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve:{
        extensions:[".js",".json",".jsx",".css"]
    },
    module: {
        rules: [
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use:["css-loader","postcss-loader"]})},
            { test: /\.(jpe?g|png)$/, use: 'file-loader?name=[name][hash:5].[ext]&outputPath=images/' },
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader"})}
      ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              drop_console: false,
            }
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({ template: 'template/index.html', filename: 'index.html' ,title: 'ele-me'}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        })
    ]
}
