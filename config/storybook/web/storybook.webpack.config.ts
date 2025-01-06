import type { RuleSetRule } from 'webpack';
import { Resolver } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const BUILD_FOLDER_NAME = 'dist';

export const customResolverPlugins: Resolver[] = [
  new TsconfigPathsPlugin({
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
  }) as never
];

export const customModuleRules: RuleSetRule[] = [
  {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react', {
              runtime: 'automatic'
            }
          ]
        ]
      }
    }
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    type: 'asset/resource',
    generator: {
      outputPath: `images`,
      filename: '[name][ext][query]',
      publicPath: '/images/'
    }
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    type: 'asset/resource',
    generator: {
      outputPath: `fonts`,
      filename: `[name][ext][query]`,
      publicPath: '/fonts/'
    }
  },
  {
    test: /\.html$/i,
    loader: 'html-loader'
  }
];
