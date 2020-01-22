const path = require('path');

module.exports = {
    entry: {
        fromEvent:   path.resolve(__dirname, 'browser-setup', './fromEvent/index.ts')
    }, 
    output: {
        path: path.resolve(__dirname),
        publicPath: path.resolve(__dirname, 'browser-setup', 'fromEvent'),
        filename: '[name]/index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
        
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'browser-setup', 'fromEvent')
    }
}