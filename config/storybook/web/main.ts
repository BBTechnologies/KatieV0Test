import type { StorybookConfig } from '@storybook/react-webpack5';
import { customModuleRules, customResolverPlugins } from './storybook.webpack.config';

const STORY_PATH: string = '../../../src/**/*.stories';
const DOCS_PATH: string = '../../../src/docs/**/*';
const STORY_DOCS_PATH: string = '../../../src/**/*';

const config = {
  base: '/x15-ui-library/',
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    'storybook-addon-sass-postcss',
    'storybook-addon-performance'
  ],
  stories: [`${ STORY_PATH }.@(js|jsx|mjs|ts|tsx|mdx)`, `${ DOCS_PATH }.@(tsx|mdx)`, `${ STORY_DOCS_PATH }.mdx`],
  staticDirs: [
    '../../../dist',
    '../../../src/staticAssets'
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;
      },
    },
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true
      }
    }
  },
  webpackFinal: async (config) => {
    if (config?.resolve?.plugins) {
      config.resolve.plugins = [...(config.resolve.plugins || []), ...(customResolverPlugins as never[])];
    }

    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias
      };
    }

    if (config?.module?.rules) {
      config.module.rules = [...(config.module.rules || []), ...customModuleRules];
    }

    // Helpful for debugging
    // eslint-disable-next-line no-console
    // console.log(util.inspect(config, { showHidden: false, depth: null, colors: true }));

    // Find the rule that processes SCSS files
    /*
    if (config?.module?.rules) {
      const isRuleSetRule = (rule: any): rule is RuleSetRule => rule?.test;

      const scssRule = config.module.rules.find(
        (rule) => isRuleSetRule(rule) && rule?.test?.toString().includes('scss')
      ) as RuleSetRule;

      if (scssRule && scssRule.use) {
        const useArray = scssRule.use as Array<{
          loader?: string;
          options?: Record<string, unknown>;
        }>;

        // Modify the sass-loader options to include the Sass logger
        useArray.forEach((use) => {
          if (use.loader && use.loader.includes('sass-loader')) {
            use.options = {
              ...use.options,
              sassOptions: {
                logger: console,  // Enable @debug output
              },
            };
          }
        });
      }
    }
     */

    return config;
  }
} as StorybookConfig;

export default config;
