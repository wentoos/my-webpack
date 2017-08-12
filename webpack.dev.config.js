const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    devtool:"source-map",
    devServer: {
        port: 3000,
        hot:true
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve:{
        extensions:[".js",".json",".jsx",".css"]
    },
    module: {
        rules: [
            { test: /\.js[x]?$/, exclude: /node_modules/, use: "babel-loader" },
            { test: /\.css$/, use: ['style-loader',"css-loader",'postcss-loader'] },
            { test: /\.(jpe?g|png)$/, use: 'file-loader' }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'template/index.html', filename: 'index.html',title: 'ele-me'}),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:3000'
        }),
    ]
}
