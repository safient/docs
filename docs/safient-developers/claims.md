---
sidebar_position: 3
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

# Safient Claims

Dispute resolution platform for Safient claims using [Kleros court](https://kleros.io/integrations).

## Getting Started

### Installation:

Install the dependencies and deploy the contracts on local chain.

```bash
git clone https://github.com/safient/safient-claims-js
cd safient-claims-js
npm install
```

### Running tests:

Start the local blockchain:

```bash
npm run chain
```

Run tests:

```bash
npm run test
```

### Usage

Install the Node module:

```
npm install @safient/claims
```

Import and consume in your project:

```

import { SafientClaims } from '@safient/claims';


// If not injected web3 provider, create a jsonRpcProvider
const { JsonRpcProvider } = require('@ethersproject/providers');
const provider = new JsonRpcProvider('http://localhost:8545');

// Get chainId from provider
(async () => {
  const providerNetwork = await provider.getNetwork();
  const chainId = providerNetwork.chainId;
})();

const sc = new SafientClaims(provider, chainId);
```

## Technologies used:

- [Kleros](https://kleros.io/integrations)
- [Textile ThreadDb](https://docs.textile.io/threads/)
