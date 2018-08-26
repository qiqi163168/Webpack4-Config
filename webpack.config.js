const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 


const config = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "production",
    // import引用
    resolve: {
        alias: {
            node_modules: path.resolve(__dirname, 'node_modules'),
            components  : path.resolve(__dirname, 'src/components')
        }
    },
    module: {
        rules: [
            // css-loader,style-loader
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // url-loader
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            // bable-loader
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
        

        ]
    },
    plugins: [
        // html文件处理
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            // favicon: './favicon.ico'
        }),
        // 独立css文件
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        // 局部热加载
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        minimize: false
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: './dist',
        port: 9990,
        historyApiFallback: {
            index: '/dist/index.html'
        },
    },
    
};

module.exports = config;