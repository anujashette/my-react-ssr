const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
    entry: './views/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'public/client.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.css','.scss']
    },
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
    }
};

const serverConfig = {
    entry: './server.js',
    target: "node",
    devtool: "source-map",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.css','.scss']
    },
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
    plugins: [
        new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: false
        })
    ]
};

module.exports = [
    clientConfig,
    serverConfig
];
