---
id: get_started
---
# Get Started

CyberConnect offers three ways to get integrated: querying CyberConnect Indexer GraphQL endpoints, embedding a CyberConnect Button or using CyberConnect JavaScript SDK. In this article, we will use CyberConnect JavaScript SDK for demonstration. 

For details of all three ways of integration, please check [JavaScript SDK](./Apis/installation), [CyberConnect Indexer](./Apis/about_indexer) and [CyberConnect Button](./Apis/follow_button) sections.

## CyberConnect JavaScript SDK

### Installation

Before start, please make sure [NodeJS](https://nodejs.org/en/) has been installed on your computer.

```bash
node --version
```

In the terminal, create a new folder, initialize a npm module and create a JS file.

```bash
mkdir CyberConnect && cd CyberConnect
npm init -y
touch index.js
```

To install and save CyberConnect dependency, simply run:

```bash
npm install --save @cyberlab/cyberconnect
# Or, you can also use yarn if you prefer
yarn add @cyberlab/cyberconnect
```
### Initialization

Import CyberConnect package and initialize a CyberConnect instance by:

```js
import CyberConnect from '@cyberlab/cyberconnect'

const cyberConnect = new CyberConnect({
        ethProvider: ethProvider,     // provider from web3js or ethers.js or other 
        namespace: '',   // or what you want
        env:'PRODUCTION',                   // or 'STAGING' in dev environment
      });
```

For how to get an ethProvider, please check official tutorial from [Web3JS](https://web3js.readthedocs.io/en/v1.7.0/) or [EthersJS](https://docs.ethers.io/v5/).

### Follow and Unfollow

You can add following or unfollow somebody by: 

```js
const addressToFollow = '0xxxxxxxxxx';

// Follow
try{
    cyberConnect.connect(addressToFollow);
}catch(e){
    console.log(e)
}

// Unfollow
try{
    cyberConnect.disconnect(addressToFollow);
}catch(e){
    console.log(e)
}

```

That should do it! You have finished a quick integration with CyberConnect SDK. If you encounter any issue, you can join our discord, raise your question in Developer channel. 

### Next Step

Your next step can be to continue reading [CyberConnect Indexer Tutorial](./Apis/about_indexer). You can fetch the list of followers and following through indexers GraphQL APIs. 
