const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 


const config = {
    entry: './src/app.jsx',
    output: {
        path      : path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename  : 'assets/js/[name].js'
    },
    mode: "development",
    // import引用
    resolve: {
        alias: {
            node_modules: path.resolve(__dirname, 'node_modules'),
            components  : path.resolve(__dirname, 'src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: ["style-loader", "css-loader","sass-loader"]
            },
            // MiniCssExtractPlugin与style-loader无法共存
            // 保留MiniCssExtractPlugin - 可见打包出main.css
            // 保留style-loader - 可使用样式热加载
            // {
            //     test: /\.(sass|scss|css)$/,
            //     use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
            // },
            // url-loader
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name : 'assets/resource/[name].[ext]' 
                }
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name : 'assets/resource/[name].[ext]' 
                }
            },
            // bable-loader
            {
                test: /\.(js|jsx)$/,
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
            filename: "assets/css/[name].css",
            chunkFilename: "[id].css"
        }),
        // 局部热加载
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        minimize: true,
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