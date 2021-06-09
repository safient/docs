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

Install the dependencies and deploy the contracts on local chain.

```bash
git clone https://github.com/safient/safient-claims.git
cd safient-claims
npm install
npm run chain
npm run deploy
```

Then, run the client development server:

```bash
cd client
npm install
npm run start
```

🌐 Open http://localhost:3000 in your browser to test the application

📝 Smart contract is located at /contracts

📚 Access artifacts from /subgraph and /client/src/contracts folders

## Technologies used:

- [Kleros](https://kleros.io/integrations)
- [Textile ThreadDb](https://docs.textile.io/threads/)
