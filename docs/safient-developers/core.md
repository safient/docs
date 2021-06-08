---
sidebar_position: 2
keywords:
  - digital assets
  - self-sovereign
  - Crypto Inheritance
  - decentralized storage
  - trustless mechanism
description: Safient promises to securely and conveniently store any critical information that is needed to access and recover the assets in case of any tragic events. Safient also provides a trustless yet safe way to transfer and inherit the assets by close ones whenever such an unfortunate scenario occurs
image: https://twitter.com/safientio/photo
website: https://safient.io/
app: https://safient.io/
github: https://github.com/safient
twitter: https://twitter.com/safientio
npm: https://www.npmjs.com/package/safient-claims
---

# Safient Core

Safe core currently implements the end to end mechanism for safe creation and safe recovery.
The implementation includes conecpts such as:

1. [Secret sharing using Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing).
2. [Proxy re-encryption](https://en.wikipedia.org/wiki/Proxy_re-encryption).

## Getting Started

Core implementation include both client and middleware applications.

First, run the middleware server:

```bash
cd middleware
npm install | yarn install
npm start
```

Then, run the client development server:

```bash
npm install | yarn install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies used:

- [Ceramic IDX](https://idx.xyz/)
- [Textile ThreadDb](https://docs.textile.io/threads/)
