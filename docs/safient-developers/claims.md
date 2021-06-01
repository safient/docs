---
sidebar_position: 3
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
* [Kleros](https://kleros.io/integrations)
* [Textile ThreadDb](https://docs.textile.io/threads/)
