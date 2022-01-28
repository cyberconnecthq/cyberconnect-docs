---
id: following_list
---

# Identity

Identity API is used for query information about an address on blockchain network. You can retrieve an address's domain name, indexed following & followers list using the following GraphQL query.
## Definition

The definition of Identity query is:
```graphql
identity ( address String!, network Network ) UserIdentity!
```

* `address`: the string of the address that you query for.
* `network`: the blockchain network for the querying address. Default is `ETH`. you can also use `SOLANA` for Solana network.

With correct input, you can retrive a `UserIdentity` object with following fields:
 
* `address` String - the address that you are querying
* `domain` String - primary ENS domain or Solana domain of the address 
* `ens` String - ENS Domain of the address (DEPRECATED:ens is deprecated. Use domain instead.)
* `social` Social - user's social account, like Twitter
* `avatar` String - user's avatar url
* `joinTime` String - the time of user's first sent transaction on the given blockchain network
* `followerCount` ( namespace String ) Int - how many followers does the user have for the given network and namespace
* `followingCount` ( namespace String ) Int - how many followings does the user have for the given network and namespace
* `followings` ( namespace String, first Int, after String ) BasicInfoConnection - list of user's followings
* `followers` ( namespace String, first Int, after String ) BasicInfoConnection - list of user's followers
* `friends` ( namespace String, first Int, after String ) BasicInfoConnection - list of user's friends (mutually followed)

## Field Query

One of the advantages of using GraphQL is that, you can customize the query, selecting the fields based on what you need. For example, if you only need to query one address' ENS, you can run:

```graphql
query QueryForENS{
  identity(address: "0x148d59faf10b52063071eddf4aaf63a395f2d41c", network: ETH) {
    domain
  }
}
```

and you will get:

```graphql
{
  "data": {
    "identity": {
      "domain": "cyberlab.eth"
    }
  }
}
```

You can also use `social`, `avatar`, or other fields to get different information about an account. 

## Followers, Followings, Friends Lists

### Concept of Namespace

CyberConnect is a protocol used for address connections of different networks, applications. In order to get the follower, following, friend list of an address, you need to specify `namespace` variable. 

The default namespace is `CyberConnect`, which is provided and maintained by CyberConnect team. The official site of CyberConnect use this namespace and hence there are a lot of existed connections in this namespace. 

If you are an individual developer, and you want to use the data from a big social connection network, this could be a good choice. If your application needs a new and independent network, you can use CyberConnect SDK to append new connections and use the indexer to query with your namespace. 

### Pagination

For pagination, we use `first` and `after` parameters. It's very similar to `limit` and `offset` in MySQL query pagination, but you should set `after` as "-1" for the beginning since the index of an array starts from zero.

The default value of `first` variable is 20 and the maximum value is 50.

If you are querying someone with more than 50 members of the given type, you need to implement querying with pagination. 

All three types of list will return a `BasicInfoConnection` object with fields:

* `pageInfo`
* `list`

For `pageInfo`, there are 4 fields:

* `startCursor`: A String variable, meaning what is starting index of this query
* `endCursor`: A String variable, meaning what is ending index of this query
* `hasNextPage`: A Boolean variable, meaning whether there is more data to query
* `hasPreviousPage`: A Boolean variable, meaning whether there is data previously

For your query with pagination, it can be a for-loop begins with `first` as 50, and `after` as "-1" (please notice it's a string variable), and then add `after` by the batch size you set again and again, until `hasNextPage` turns into false.

### Followers Example


We can use this snippet for address' follower list query:
```graphql
query FullIdentityQuery{
  identity(address: "0x148d59faf10b52063071eddf4aaf63a395f2d41c", network: ETH) {
    followerCount(namespace: "CyberConnect")
    followers(first: 1, after: "-1") {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      } 
      list {
        address
        domain
        avatar
        namespace
        lastModifiedTime
      } 
    }
  }
}
```

We can get a json result like this:

```json
{
  "data": {
    "identity": {
      "followerCount": 13325,
      "followers": {
        "pageInfo": {
          "startCursor": "0",
          "endCursor": "0",
          "hasNextPage": true,
          "hasPreviousPage": false
        },
        "list": [
          {
            "address": "0x00000035e82c83792df6def4de690fc87908c076",
            "domain": "",
            "avatar": "",
            "namespace": "CyberConnect",
            "lastModifiedTime": "2021-12-13T09:04:03Z"
          }
        ]
      }
    }
  }
}
```

## Full Example

You can use tools in "Playground" page to Identity API. Open the page, make sure the url is correct, copy and paste the following block of query into the input.

**Example Query for Ethereum**

We take CyberLab.eth as an example. To query the information of it, type:

```graphql
query FullIdentityQuery{
  identity(address: "0x148d59faf10b52063071eddf4aaf63a395f2d41c", network: ETH) {
    address
    domain
    social {
      twitter
    }
    avatar
    joinTime
    followerCount(namespace: "CyberConnect")
    followingCount(namespace: "CyberConnect")
    followings(namespace: "CyberConnect", first: 2, after: "-1") {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      } 
      list {
        address
        domain
        avatar
        alias
        namespace
        lastModifiedTime
        verifiable
      } 
    }
    followers(namespace: "CyberConnect", first: 2, after: "-1") {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      } 
      list {
        address
        domain
        avatar
        alias
        namespace
        lastModifiedTime
        verifiable
      } 
    }
    friends(namespace: "CyberConnect", first: 2, after: "-1") {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      } 
      list {
        address
        domain
        avatar
        alias
        namespace
        lastModifiedTime
        verifiable
      } 
    }
  }
}
```

Run, and you are expected to see something like this:

**Example returned result**

```json
{
  "data": {
    "identity": {
      "address": "0x148d59faf10b52063071eddf4aaf63a395f2d41c",
      "domain": "cyberlab.eth",
      "social": {
        "twitter": "CyberConnectHQ"
      },
      "avatar": "https://images.cybertino.io/cyberconnect_logo",
      "joinTime": "2021-11-09T02:44:18Z",
      "followerCount": 13320,
      "followingCount": 29,
      "followings": {
        "pageInfo": {
          "startCursor": "0",
          "endCursor": "1",
          "hasNextPage": true,
          "hasPreviousPage": false
        },
        "list": [
          {
            "address": "0x7eff7eee42dc0bd27081a78fe23cfe2a72697f2b",
            "domain": "rolex1.eth",
            "avatar": "https://lh3.googleusercontent.com/2V7MIgYtRZc9NTJrpX8vl_ggjZKee3lstpYdXZWAjHKj-BJO2i4VGyGvllIRa9E81I4bKBmOiJn0OHxoZbIWLpffrt9sap_EpmfCMA=s128",
            "alias": "",
            "namespace": "CyberConnect",
            "lastModifiedTime": "2021-12-18T05:33:10Z",
            "verifiable": false
          },
          {
            "address": "0xa14964479ebf9cd336011ad80652b08cd83dfe3a",
            "domain": "isimppleasr.eth",
            "avatar": "",
            "alias": "",
            "namespace": "CyberConnect",
            "lastModifiedTime": "2021-12-17T20:25:49Z",
            "verifiable": false
          }
        ]
      },
      "followers": {
        "pageInfo": {
          "startCursor": "0",
          "endCursor": "1",
          "hasNextPage": true,
          "hasPreviousPage": false
        },
        "list": [
          {
            "address": "0xea7a2e298e218fd84d5b84345e6cae712f234ef2",
            "domain": "haode.eth",
            "avatar": "",
            "alias": "",
            "namespace": "CyberConnect",
            "lastModifiedTime": "2022-01-28T05:21:15Z",
            "verifiable": true
          },
          {
            "address": "0x29c13925972ad9229e281d6287175408b2788b79",
            "domain": "",
            "avatar": "",
            "alias": "",
            "namespace": "CyberConnect",
            "lastModifiedTime": "2022-01-28T03:19:05Z",
            "verifiable": true
          }
        ]
      },
      "friends": {
        "pageInfo": {
          "startCursor": "0",
          "endCursor": "1",
          "hasNextPage": true,
          "hasPreviousPage": false
        },
        "list": [
          {
            "address": "0x2bb0948a54442250ca26f6a5b1716319b916410e",
            "domain": "rocifi.eth",
            "avatar": "https://avatars.githubusercontent.com/u/86011685?s=200&v=4",
            "alias": "",
            "namespace": "CyberConnect",
            "lastModifiedTime": "2021-12-15T19:48:24Z",
            "verifiable": false
          },
          {
            "address": "0xf6b6f07862a02c85628b3a9688beae07fea9c863",
            "domain": "poap.eth",
            "avatar": "",
            "alias": "",
            "namespace": "CyberConnect",
            "lastModifiedTime": "2021-12-15T19:48:19Z",
            "verifiable": false
          }
        ]
      }
    }
  }
}
```