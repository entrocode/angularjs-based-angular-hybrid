module.exports = [
    {test: /\.ts(x?)$/, use: 'ts-loader'},
    {
        test: /\.css$/,
        use: ['style-loader','css-loader']
    }, {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
    }, {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'raw-loader'
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
    }, {
        test: '\.jpg$',
        exclude: /node_modules/,
        use: 'file-loader'
    }, {
        test: '\.png$',
        exclude: /node_modules/,
        use: 'url-loader'
    }, {
        test: /\.json$/,
        exclude: /node_modules/,
        use: "file-loader?name=[name].[ext]&publicPath=assets/foo/&outputPath=app/phones/"
    }
];