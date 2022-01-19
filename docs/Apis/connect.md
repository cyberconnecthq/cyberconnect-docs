---
id: connect
---

# Connect & Disconnect

The JavaScript library provides two primary functions, **connect** and **disconnect**. The library encapsulates the complex authentication logic (authenticate to Ceramic Network) into easy-to-use functions. The source code can be found [here](https://github.com/cyberconnecthq/js-cyberconnect).

## User Flow

In general, there are two steps needed from users to write connection data.

**1.Initialize action**

The user start by clicking the follow/unfollow button in the website, it **should** invoke **connect** function in the JavaScript library.

**2. Sign MetaMask message**

This step is needed **only** when its user's first action in the current session. The user doesn't need to sign MetaMask message again for the following actions. 

After user signed the first message, the library will generate a **derived signing key** stored in the memory for future safe interaction with Ceramic Network.

## Installation

```bash
npm install @cyberlab/cyberconnect
or
yarn add @cyberlab/cyberconnect
```

## Basic Usage

**Init CyberConnect**

```js
import CyberConnect, {
  Env,
  Blockchain,
} from 'npm install @cyberlab/cyberconnect';

const cyberConnect = new CyberConnect({
  namespace: 'CyberConnect',
  env: Env.Production,
  chain: Blockchain.ETH,
  provider: provider,
});
```

* `namespace` - Your application name.
* `env` - (optional) Env decides the endpoints. Now we have staging and production. (The default value is Env.Production).
* `chain` - (optional) The blockchain you want to connect with. Now we support Ethereum and Solana. (The default is Blockchain.ETH).
* `provider` - The corresponding provider of the given chain.

**Connect**

```js
cyberConnect.connect(targetAddr, alias);
```

* `targetAddr` - The target wallet address to connect.
* `alias` - (optional) Alias for the target address.

**Disconnect**

```js
cyberConnect.disconnect(targetAddr);
```

**Solana**

You can get Solana provider from `@solana/wallet-adapter-react`

```js
import { useWallet } from '@solana/wallet-adapter-react';
const solanaProvider = useWallet();
```

Note: You need to pass `chainRef` when you connect to Solana. Now we have three options: `Solana.SOLANA_MAINNET_CHAIN_REF`, `Solana.SOLANA_DEVNET_CHAIN_REF` and `Solana.SOLANA_TESTNET_CHAIN_REF`

```js
import CyberConnect, {
  Env,
  Blockchain,
  Solana,
} from 'npm install @cyberlab/cyberconnect';

const cyberConnect = new CyberConnect({
  namespace: 'CyberConnect',
  env: Env.Production,
  chain: Blockchain.ETH,
  provider: solanaProvider,
  chainRef: Solana.SOLANA_MAINNET_CHAIN_REF,
});
```