const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.scss$/,
                // use: [{
                //     loader: "style-loader" // 将 JS 字符串生成为 style 节点
                // }, {
                //     loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                // }, {
                //     loader: "sass-loader", // 将 Sass 编译成 CSS
                // }]
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [extractSass,new HtmlWebpackPlugin({
        template:'./src/index.html',
        inject:'head',
        minify:{
            collapseWhitespace:true
        }
    }),new CleanWebpackPlugin(
        ['./dist/main.*.css']
    )],
    mode: 'development'
};