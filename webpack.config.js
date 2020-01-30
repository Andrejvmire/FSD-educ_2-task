const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        vendors: path.join(__dirname, "src", "style", "style.scss")
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: "./www",
        host: '0.0.0.0'
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
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                },
                    //     {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         plugins: function () {
                    //             return [
                    //                 require('precss'),
                    //                 require('autoprefixer')
                    //             ];
                    //         }
                    //     }
                    // },
                    {
                        loader: 'sass-loader'
                    }]
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
                test: /\.(ttf)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.pug"),
            filename: path.join(__dirname, "dist", "index.html")
        }),
        new CleanWebpackPlugin()
    ]
};