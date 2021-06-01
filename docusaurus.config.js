/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Safient',
  tagline: 'Secure crypto secret Exchange and Inheritance Protocol',
  url: 'https://docs.safient.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  // onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'safient', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Safient',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          href: 'https://blog.consensolabs.com/tag/safient',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://safient.io',
          label: 'Website',
          position: 'right',
        },  
        {
          href: 'https://github.com/safient',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Basics',
              to: '/safient-basics/basics',
            },
            {
              label: 'Developers',
              to: '/safient-developers/getting-started',
            },
            {
              label: 'Roadmap',
              to: '/roadmap',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.safient.io',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/safient',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.consensolabs.com/tag/safient',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/safient',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Safient. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
          'https://github.com/safient/docs/edit/master/',
          routeBasePath: '/'
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //   'https://github.com/safient/docs/edit/master/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
