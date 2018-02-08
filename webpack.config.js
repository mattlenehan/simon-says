const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src')
    ],
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'lib')
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [
          '.js',
          '.jsx'
        ]
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, "dist")
    // }
};