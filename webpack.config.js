var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 配置拓展名
    resolve: {
        extensions: ['.js', '.jsx', '.es']
    },
    // 入口文件
    entry: './src/index.jsx',

    output: {
        filename: './build/main.js'
    },

    module: {
        rules: [
            //jsx
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            //less
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            //es
            {
                test: /\.es$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    //定义功能
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            hash: true
        })
    ]
};
