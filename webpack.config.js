var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'app.css'
});

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        // publicPath: '/dist' // for webpack-dev-server output
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            /*{
                           test: /\.css$/,
                           loader: ExtractTextPlugin.extract({
                               use: ['style-loader', 'css!postcss']
                           })

                       },*/
            {
                // 'style-loader',
                test: /\.(scss|sass)$/,
                use: extractPlugin.extract({
                        use: ['css-loader', 'sass-loader']
                    })
                    /*loaders: ['css-loader', 'sass-loader'],
                    include: [
                        path.resolve(__dirname, 'src/css/app.scss')
                    ]*/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpg|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        // publicPath: 'img/'
                    }
                }]
            },
            {
                test: /\.(ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                        // publicPath: 'img/'
                }
                // loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    /* resolve: {
         alias: {
             src: path.resolve(__dirname, 'src')
         }
     },*/
    devtool: "eval",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])

        /*new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        })*/
    ]
}