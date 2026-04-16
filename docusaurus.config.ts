// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Waynautic AI Perf Agent',
  tagline: 'Intelligent performance testing — from script generation to analysis and NFR strategy',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://pramod915899.github.io',
  baseUrl: '/Perf-Agent-Doc/',

  organizationName: 'pramod915899',
  projectName: 'Perf-Agent-Doc',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ── Search Plugin ─────────────────────────────────────────────────────────
  // Uses @easyops-cn/docusaurus-search-local (works in both dev and prod).
  // Exact-phrase match mode: no stemming, no stop-word filtering.
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

  // ── Image Lightbox Script ─────────────────────────────────────────────────
  scripts: [
    '/Perf-Agent-Doc/js/imageExpand.js',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',   // Makes docs the homepage
          breadcrumbs: false,
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',

    // ── Light-only mode (matches Exgenix) ──────────────────────────────────
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
          href: 'https://app.perf-agent.waynautic.com/', // ← Replace with actual Perf Agent platform URL
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
            { label: 'Settings', to: '/settings/settings' },
          ],
        },
        {
          title: 'Auto Script',
          items: [
            { label: 'Auto Script', to: '/auto-script/auto-script' },
          ],
        },
        // Uncomment as each component's docs go live:
        // {
        //   title: 'Auto Analysis',
        //   items: [
        //     { label: 'Overview', to: '/auto-analysis/overview' },
        //   ],
        // },
        // {
        //   title: 'NFR Strategy Hub',
        //   items: [
        //     { label: 'Overview', to: '/nfr/overview' },
        //   ],
        // },
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
