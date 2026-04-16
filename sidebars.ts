import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',

    // ─── Auto Script ──────────────────────────────────────────────────────
    'auto-script/auto-script',

    // ─── Auto Analysis ────────────────────────────────────────────────────
    // Uncomment when Auto Analysis docs are ready
    // {
    //   type: 'category',
    //   label: 'Auto Analysis',
    //   collapsed: true,
    //   items: [
    //     'auto-analysis/overview',
    //     {
    //       type: 'category',
    //       label: 'Getting Started',
    //       items: [
    //         'auto-analysis/getting-started/quick-start',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Features',
    //       items: [
    //         'auto-analysis/features/uploading-jmx',
    //         'auto-analysis/features/pipeline-integration',
    //         'auto-analysis/features/results-dashboard',
    //         'auto-analysis/features/email-reporting',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Guides',
    //       items: [
    //         'auto-analysis/guides/troubleshooting',
    //       ],
    //     },
    //   ],
    // },

    // ─── NFR Strategy Hub ─────────────────────────────────────────────────
    // Uncomment when NFR docs are ready
    // {
    //   type: 'category',
    //   label: 'NFR Strategy Hub',
    //   collapsed: true,
    //   items: [
    //     'nfr/overview',
    //     {
    //       type: 'category',
    //       label: 'Getting Started',
    //       items: [
    //         'nfr/getting-started/quick-start',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Features',
    //       items: [
    //         'nfr/features/sla-generation',
    //         'nfr/features/workload-model',
    //         'nfr/features/ado-jira-export',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Guides',
    //       items: [
    //         'nfr/guides/troubleshooting',
    //       ],
    //     },
    //   ],
    // },

    // ─── Governance ───────────────────────────────────────────────────────
    // Uncomment when Governance docs are ready
    // {
    //   type: 'category',
    //   label: 'Governance',
    //   collapsed: true,
    //   items: [
    //     'governance/overview',
    //   ],
    // },

    // ─── Settings ─────────────────────────────────────────────────────────
    'settings/settings',
  ],
};

export default sidebars;
