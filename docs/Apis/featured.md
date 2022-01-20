---
id: featured
---

# Featured People

This API can return a list of featured people from the given address and network.

```graphql
{
  featured(fromAddr: "0xA734176D92E559146235c7f159f18f7520d3DdAF", network: "eth") {
    address
    domain
    ens
    recommendationReason
    followerCount
    isFollowing
    avatar
  }
}
```
`fromAddr` : from which address display featured addresses

`network`: currently support "eth"