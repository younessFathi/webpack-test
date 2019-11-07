const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname , './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.(css)$/gi,
                use: [
                    'style-loader','css-loader'
                ]
            }
        ]
    }
}