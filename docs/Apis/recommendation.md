---
id: recommendation
---

# Recommendation

Recommendation API is to give more possible connections to users to build. If you search for one address' recommendations, it will return a list of addresses that either have already followed or been followed by the searched address on other platforms, or have the same followers with the searched address. 

We use an algorithm called Stand Alone Complex to build our recommendation system.

## Stand Alone Complex

Stand Alone Complex is the recommendation algorithm aggregating connection data from open data sources such as Ethereum blockchain, Foundation.app, Rarible, and so on. The algorithm will generate a customized recommended addresses to follow list for every address.

The name Stand Alone Complex comes from a Japanese anime, representing a phenomenon where unrelated yet very similar actions of individuals create a seemingly concerted effort.

## Definition

 The definition of Recommendation query is:

 ```graphql
recommendations ( address String!, filter RecommFilter, network Network, first Int, after String ) RecommendationResponse!
 ```

For input params:
* `address` String - the address that you want to get recommendations from
* `filter` Enum - type of connection filter. Currently only support `SOCIAL`
* `network`: the blockchain network for the querying address. Default is `ETH`. you can also use `SOLANA` for Solana network.
* `first` Int - the number of entries should this query return, default is `20` and the maximum value is `50`
* `after` String - after which index should this query begin, default is `"-1"`

For `first` and `after` usage, please refer to Pagination Section from Identity API page.

For returning fields, "SUCCESS" means you have made a successful request and can then use the data. You may see "INDEXING" for recommendation result if you put an address that has never been queried before. Our recommendation system will run in background to get the result prepared. So you can come back and check later.

`pageInfo` is used to do pagination. Also, you can refer to Pagination Section from Identity API page for more details.

There are 5 fields in `list` variable:

* `address` String - the string of recommended address
* `domain` String - the string of recommended address' domain name
* `avatar` String - the url string of recommended address' avatar
* `recommendationReason` String - the reason why we recommend this address
* followerCount Int - the number of recommended address' followers


## Example 
**query**

```graphql
query QueryRecommendation{
  recommendations(
    address: "0x148d59faf10b52063071eddf4aaf63a395f2d41c"
    filter: SOCIAL
    network: ETH
    first: 1
    after: "-1"
  ) {
    result
    data {
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
        recommendationReason
        followerCount
      } 
    }
  }
}
```

**returned result**

```json
{
  "data": {
    "recommendations": {
      "result": "SUCCESS",
      "data": {
        "pageInfo": {
          "startCursor": "0",
          "endCursor": "0",
          "hasNextPage": true,
          "hasPreviousPage": false
        },
        "list": [
          {
            "address": "0x808a2adbd0a3fc679e3f7cd18d4f579bfcaaec9c",
            "domain": "corgibum.eth",
            "avatar": "",
            "recommendationReason": "wearehiring.eth also followed them",
            "followerCount": 1
          }
        ]
      }
    }
  }
}
```
