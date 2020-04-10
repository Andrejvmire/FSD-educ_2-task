const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        vendors: Path.join(__dirname, "src", "vendors.js"),
        app: Path.join(__dirname, "index.js"),
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
                test: /\.(sass|scss|css)$/,
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
                test: /\.(png|jpe?g|img|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]"
                    }
                }
            },
            {
                test: /\.(ttf|woff|svg|woff2|eot)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: Path.join(__dirname,"src", "pages", "index.pug"),
            filename: Path.join(__dirname, "dist", "index.html")
        }),
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, "src", "pages", "ui-kit", "colors.pug"),
            filename: Path.join(__dirname, "dist", "colors.html")
        }),
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, "src", "pages", "ui-kit", "form.pug"),
            filename: Path.join(__dirname, "dist", "form.html")
        }),
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, "src", "pages", "ui-kit", "cards.pug"),
            filename: Path.join(__dirname, "dist", "cards.html")
        }),
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, "src", "pages", "ui-kit", "headers.pug"),
            filename: Path.join(__dirname, "dist", "headers.html")
        }),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            JQuery: 'jquery',
            "window.jQuery": "jquery",
            "window.$": "jquery"
        })
    ]
};