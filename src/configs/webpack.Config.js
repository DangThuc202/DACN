module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'image/bank_img/',
                            publicPath: 'image/bank_img/',
                        },
                    },
                ],
            },
        ],
    },
};

