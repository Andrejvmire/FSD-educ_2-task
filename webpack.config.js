const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        app: Path.join(__dirname, "index.js"),
        vendors: Path.join(__dirname, "src", "vendors.js"),
    },
    output: {
        filename: "[name].js",
        path: Path.resolve(__dirname, 'dist')
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
            template: Path.join(__dirname, "index.pug"),
            filename: Path.join(__dirname, "dist", "index.html")
        }),
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, "src", "pages", "ui-kit", "colors.pug"),
            filename: Path.join(__dirname,"dist", "colors.html")
        }),
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, "src", "pages", "ui-kit", "form.pug"),
            filename: Path.join(__dirname,"dist", "form.html")
        }),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            JQuery: 'jquery'
        })
    ]
};