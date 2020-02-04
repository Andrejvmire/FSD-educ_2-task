const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, "index.js"),
        vendors: path.join(__dirname, "src", "vendors.js"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: "./dist",
        host: 'localhost'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => ([
                                require('autoprefixer')
                            ])
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|img|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "images/[hash].[ext]"
                    }
                }
            },
            {
                test: /\.(ttf|woff|svg|woff2|eot)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.pug"),
            filename: path.join(__dirname, "dist", "index.html")
        }),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            JQuery: 'jquery'
        })
    ]
};