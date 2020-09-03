const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        app: ['./client/src/app/App.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(path.resolve(__dirname), 'app', 'static'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'src', 'app', 'index.html') }),
        new Dotenv({
            path: path.join("client", "config", `${process.env.NODE_ENV}.env`),
            defaults: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}