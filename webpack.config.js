const path = require('path');
// const webpack = require('webpack');
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
            node_modules: path.resolve(__dirname, 'node_modules')
        }
    },
    module: {
        rules: [
            // css-loader,style-loader
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
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
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    optimization: {
        minimize: false
    },
    devServer: {
        contentBase: './dist',
        port: 9990,
        historyApiFallback: {
            index: '/dist/index.html'
        },
    },
    
};

module.exports = config;