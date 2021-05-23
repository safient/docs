/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Safex',
  tagline: 'Secure crypto secret Exchange and Inheritance Protocol',
  url: 'https://docs.getsafex.co',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  // onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'getsafex', // Usually your GitHub org/user name.
  projectName: 'getsafex', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Safex',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          href: 'https://blog.consensolabs.com/tag/safex',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://getsafex.co',
          label: 'Website',
          position: 'right',
        },  
        {
          href: 'https://github.com/getsafex',
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
              to: '/safex-basics/basics',
            },
            {
              label: 'Developers',
              to: '/safex-developers/getting-started',
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
              href: 'https://discord.getsafex.co',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/getsafex',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.consensolabs.com/tag/safex',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/getsafex',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Safex. Built with Docusaurus.`,
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
          'https://github.com/getsafex/docs/edit/master/',
          routeBasePath: '/'
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //   'https://github.com/getsafex/docs/edit/master/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
