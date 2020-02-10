const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
        entry:{
            client: './browser/Home.js',
            index: './browser/index.js'
        },
        target: 'web',
        output: {
            path: path.resolve(__dirname, 'dist/bundle'),
            filename: "[name].bundle.js"
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss']
        },
    devtool: "cheap-module-source-map",
    module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    include: /node_modules/,
                    loaders: ['style-loader', 'css-loader'],
                }
            ]
        },
        watchOptions: {
            aggregateTimeout: 1000,
            poll: 500,
            ignored: /node_modules/,
        },
        plugins: [
            new UglifyJSPlugin({
                sourceMap: true,
                uglifyOptions: { ecma: 8 },
            }),
            new webpack.IgnorePlugin(/(locale)/, /node_modules.+(moment)/)
        ]
    }
;

const serverConfig = {
    entry: {
        server: './views/Home.js',
        IndexHtml: './views/IndexHtml.js'
    },
    target: "node",
    devtool: "cheap-module-source-map",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist/bundle'),
        filename: "[name].bundle.js",
        libraryTarget: "commonjs2"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets:['@babel/preset-env', '@babel/preset-react']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    }
};

module.exports = [
    clientConfig,
    serverConfig
];
