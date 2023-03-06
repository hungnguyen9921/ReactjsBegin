const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.ENVIRONMENT': JSON.stringify('development'),
  'process.env.PORT': JSON.stringify('3080'),
  'process.env.MONGODB_URI': JSON.stringify(
    'mongodb+srv://admin:Anhhungnhata1@cluster0.6ksnyul.mongodb.net/webDatabase?retryWrites=true&w=majority'
  ),
  'process.env.JWT_SECRET': JSON.stringify('HUNGJWT123'),
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('development'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.MONGODB_URI': JSON.stringify(
      'mongodb+srv://admin:Anhhungnhata1@cluster0.6ksnyul.mongodb.net/webDatabase?retryWrites=true&w=majority'
    ),
    'process.env.JWT_SECRET': JSON.stringify('HUNGJWT123'),
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('development'),
    'process.env.PORT': JSON.stringify('80'),
    'process.env.MONGODB_URI': JSON.stringify(
      'mongodb+srv://admin:Anhhungnhata1@cluster0.6ksnyul.mongodb.net/webDatabase?retryWrites=true&w=majority'
    ),
    'process.env.JWT_SECRET': JSON.stringify('HUNGJWT123'),
  };
}

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.cjs',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'ignore-loader',
      },
    ],
  },
  target: 'node',
  plugins: [new webpack.DefinePlugin(ENVIRONMENT_VARIABLES)],
};
