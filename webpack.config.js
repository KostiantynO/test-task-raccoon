const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ESLintPlugin = require('eslint-webpack-plugin');

// require - import in commonJS modules for Node.js
// module.exports - this is export, but for Node.js

const pages = ['goods', 'orders', 'about', 'contacts', 'users'];
const pagesHTML = pages.map(
  page =>
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `./src/html/${page}.html`), // template file
      filename: `${page}.html`, // output file
      chunks: [`${page}`], // подключит js файл в head page.html.
    })
);

module.exports = {
  entry: pages.reduce(
    (config, page) => {
      config[page] = path.resolve(__dirname, `./src/js/pages/${page}.js`);
      return config;
    },
    { main: path.resolve(__dirname, './src/index.js') }
  ),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  devtool: 'source-map',

  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },

      // CSS, PostCSS, and Sass
      {
        // test: /\.scss$/i,
        test: /\.(scss|css)$/,

        use: [
          // 'style-loader', // инлайнит стили в <style> перед </head>, оно уже не надо - дает ошибку, если включить вместе с mini-css loader.
          MiniCssExtractPlugin.loader, // это просто ссылка на загрузчик, она из нашего js файла вытянет строку css-ую и сделает отдельный css файлик красивый.
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          // переведет css в commonJS модуль
          // 'postcss-loader',

          {
            loader: 'postcss-loader', // переведет css в commonJS модуль
            options: {
              sourceMap: true,
            },
          },

          {
            loader: 'sass-loader', // переведет sass в css
            options: {
              additionalData: '@import "./src/scss/utils/_variables.scss";',
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      // Images
      {
        test: /\.(?:jpg|png|jpeg|ico|gif|avif|webp|webp2)$/i,
        // dependency: { not: ['url'] },
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name][hash].[ext]',
          outputPath: 'images',
        },
      },

      // Images
      {
        test: /\.(?:svg)$/i,
        // dependency: { not: ['url'] },
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name][hash].[ext]',
          outputPath: 'images/svg',
        },
      },

      // Fonts and SVGs
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][hash][ext]',
        },
      },
      // html
      // {
      //   test: /\.html$/,
      //   // dependency: { not: ['url'] },
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: '/',
      //       },
      //     },
      //   ],
      //   exclude: path.resolve(__dirname, './src/html/index.html'),
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/html/index.html'), // template file
      title: 'Home',
      filename: 'index.html', // output file
      chunks: ['main'], // подключит js файл в head index.html.
    }),

    ...pagesHTML,

    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),

    new ESLintPlugin(),

    new CleanWebpackPlugin(), // removes dist on run dev
  ],

  stats: 'errors-only',

  devServer: {
    port: 5555,
    open: true,
  },
};
