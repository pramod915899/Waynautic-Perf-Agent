// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Waynautic AI Perf Agent',
  tagline: 'Intelligent performance testing from script generation to analysis and NFR strategy',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://pramod915899.github.io',
  baseUrl: '/Waynautic-Perf-Agent/',

  organizationName: 'pramod915899',
  projectName: 'Waynautic-Perf-Agent',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        removeDefaultStemmer: true,
        removeDefaultStopWordFilter: true,
        searchResultContextMaxLength: 0,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        indexPages: true,
        searchResultLimits: 7,
      },
    ],
  ],

  scripts: ['/Waynautic-Perf-Agent/js/imageExpand.js'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          breadcrumbs: false,
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    hideTableOfContents: true,

    navbar: {
      title: 'Perf Agent Docs',
      logo: {
        alt: 'Waynautic AI Perf Agent Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'http://122.173.132.55:3002/ai-perf-agent',
          label: 'Perf Agent Platform',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Platform',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Settings', to: '/settings' },
          ],
        },
        {
          title: 'Auto Script',
          items: [{ label: 'Auto Script', to: '/auto-script' }],
        },
        {
          title: 'Auto Analysis',
          items: [{ label: 'Auto Analysis', to: '/auto-analysis' }],
        },
        {
          title: 'NFR Strategy Hub',
          items: [{ label: 'NFR Strategy Hub', to: '/auto-nfr' }],
        },
        {
          title: 'AI Chatbot',
          items: [{ label: 'AI Chatbot', to: '/chatbot' }],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Waynautic / EXG. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
