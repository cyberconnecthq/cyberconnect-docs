---
id: get_started
---
# Get Started

There are 3 ways for you to get integrated into CyberConnect: adding CyberConnect Button in HTML file, NPM module, and our CyberConnect Indexer GraphQL api.


## CyberConnect Button

First, you need to include [cyberconnect-follow-button.min.js](https://connect.cybertino.io/js/cyberconnect-follow-button.min.js) script.

Then, you can call `follow.init` after the script loaded.

```js
<script>
async function initCyberConnect() {
    await capi.follow.init({
        ethProvider: ethProvider, // ethProvider is an Ethereum provider
	namespace: 'CyberConnect',
	env: 'PRODUCTION' // env decides the endpoints. Now we have STAGING and PRODUCTION. The default value is PRODUCTION
    });
</script>
<script src="https://connect.cybertino.io/js/cyberconnect-follow-button.min.js" defer onload="initCyberConnect"></script>
```

Third, to create a follow button, add an `div` element to contain a button `id` and call `follow.render` with the button `id` and the target wallet address

```html
<body>
  <div id="follow-button"></div>
  <script>
    capi.follow.render("follow-button", {
      toAddr: "xxx",
      onSuccess: (event) => {
        console.log(event);
      },
      onFailure: (event) => {
        console.log(event);
      },
    });
  </script>
</body>
```

<b>Button Style:</b>
* Follow:
  * Normal:

    ![](https://user-images.githubusercontent.com/17503721/143494393-d397246e-0901-4026-aa8a-666515ad6cc5.png)
  * Hover:

    ![](https://user-images.githubusercontent.com/17503721/143494572-598b1e0a-9c76-4f61-83d0-f25e589ef66e.png)

## NPM module

**Installation**

To install and save CyberConnect dependency, simply run:

```bash
npm install --save @cyberlab/cyberconnect

# you can also use yarn if you prefer it

yarn add @cyberlab/cyberconnect
```

Initialize a CyberConnect instance by:

```js
const cyberConnect = new CyberConnect({
        ethProvider: ethProvider,     // provider from web3js or ethers.js or other 
        namesÏpace: 'CyberConnect',   // or what you want
        env:'PRODUCTION',                   // or 'STAGING' in dev environment
      });
```

**Follow and unfollow**

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

## GraphQL API

Through CyberConnect GraphQL apis, you can get target address' identity, recommend addresses, featured addresses and many other info. 

We take identity query as an example:

```graphql
query IdentityQuery{
  identity(address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"){
    address
    ens
    social {
      twitter
    } 
    followerCount(namespace: "CyberConnect")
    followingCount(namespace: "CyberConnect")
    followings {
      list {
        address
        ens
        alias
        namespace
        lastModifiedTime
      }
    }
    followers {
      list {
        address
        ens
        alias
        namespace
        lastModifiedTime
      }
    } 
  }
}
```

You can retrieve the info like this:

```json
{
  "data": {
    "identity": {
      "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      "ens": "vitalik.eth",
      "social": {
        "twitter": ""
      },
      "followerCount": 10143,
      "followingCount": 0,
      "followings": {
        "list": []
      },
      "followers": {
        "list": [
          {
            "address": "0x00000035e82c83792df6def4de690fc87908c076",
            "ens": "",
            "alias": "",
            "namespace": "CyberConnect",
            "lastModifiedTime": "2021-12-13T09:44:08Z"
          },
          ...
          {
            "address": "0x006ff65bf0e549db61c85854db18ca47d80f541c",
            "ens": "",
            "alias": "",
            "namespace": "CyberConnect",
            "lastModifiedTime": "2021-12-24T07:05:04Z"
          }
        ]
      }
    }
  }
}
```

You can try our api in playground: [CyberConnect GraphQL Playground](https://api.cybertino.io/connect/graphiql)

:::caution

Please be sure to use https://api.cybertino.io/connect/ as URL in the playground

:::



