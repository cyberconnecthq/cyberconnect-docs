---
id: following_list
---

# Following & Followers List

You can retrieve an address's indexed following & followers list on CyberConnect using the following GraphQL query.

**Example query**

```graphql
query {
  # ENS can also be passed as the address here to fetch idenity.
  identity(address: "0x8ddD03b89116ba89E28Ef703fe037fF77451e38E") {
    address
    followingCount
    followerCount
    followers {
      list {
        address
      }
    }
    followings {
      list{
        address
      }
    }
  }
}
```

**Example returned result**

```json
{
  "data": {
    "identity": {
      "address": "0x8ddd03b89116ba89e28ef703fe037ff77451e38e",
      "followingCount": 6,
      "followerCount": 3,
      "followers": {
        "list": [
          {
            "address": "0xebed0bf2701e905b4c576b3dc943d797bac226ed"
          },
          {
            "address": "0xc47aa859fa329496db6d498165da7e0b1fe13430"
          },
          {
            "address": "0x9dd481d6c1656816bfd564151e29d57e041d2c8f"
          }
        ]
      },
      "followings": {
        "list": [
          {
            "address": "0x8faf912cd1ee33a64870de62d0bab4cc3a84001a"
          },
          {
            "address": "0xebf02c6e12c3ee119abba161c40bfeead0a06b15"
          },
          {
            "address": "0x1b2965dc3b1697dd10b7126ec7393d79cda2cf91"
          },
          {
            "address": "0xef6d69922bc2d038cb508086846524f8011c4a74"
          },
          {
            "address": "0xc47aa859fa329496db6d498165da7e0b1fe13430"
          },
          {
            "address": "0x8891075a34b58a53dddf50b8e200211ff470a580"
          }
        ]
      }
    }
  }
}

```