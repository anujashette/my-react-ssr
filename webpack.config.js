const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
        entry: './views/index.js',
        target: 'web',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'public/client.bundle.js'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss']
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
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            contentBase: './dist',
            inline: true,
            hot: true,
            // host:'192.168.0.90',
            // port: '4200',
            historyApiFallback: true
        }
    }
;

const serverConfig = {
    entry: './views/Home.js',
    target: "node",
    devtool: "source-map",
    externals: [nodeExternals({
        importType: 'umd'
    })],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
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
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = [
    clientConfig,
    serverConfig
];
