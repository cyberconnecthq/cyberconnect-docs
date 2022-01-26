---
id: recommendation
---

# Recommendation List

Stand Alone Complex is the recommendation algorithm aggregating connection data from open data sources such as Ethereum blockchain, Foundation.app, Rarible, and so on. The algorithm will generate a customized recommended addresses to follow list for every address.

The name Stand Alone Complex comes from a Japanese anime, representing a phenomenon where unrelated yet very similar actions of individuals create a seemingly concerted effort.

**Example query**

```graphql
query {
  recommendations(address: "0x8ddD03b89116ba89E28Ef703fe037fF77451e38E") {
    data {
      list {
        address
        recommendationReason
      }
    }
  }
}
```

**Example returned result**

```json
{
  "data": {
    "recommendations": {
      "data": {
        "list": [
          {
            "address": "0xe5b65aa09191776efa5b2d200891bba70175bf28",
            "recommendationReason": "You followed them on Context platform"
          }
        ]
      }
    }
  }
}
```
