---
id: get_connection
---

# Get Connection

Connection API is used to query fields of connections between a given address and another address or a list of other addresses (5000 max).

## Structure

The general pattern of Connection query is:

```graphql
connections(fromAddr String!, toAddrList [String!]!, network Network) [Connection!]!
```

| Field        | Type       | Description                                                                                                                      |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `fromAddr`   | String!    | The source address that you want to query connections about                                                                      |
| `toAddrList` | [String!]! | A string list of addresses that you want to check if they have connections with `fromAddr`                                       |
| `network`    | Network    | The blockchain network of the address you are querying about. Default is `ETH`. you can also use `SOLANA` for the Solana network |

With correct inputs, you will get a list of `Connection` objects, consisting of the following fields:

| Field           | Type          | Description                                                                                                               |
| --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `fromAddr `     | String!       | The source address that you want to query connections about                                                               |
| `toAddr`        | String!       | An address that is given in `toAddrList`                                                                                  |
| `followStatus ` | FollowStatus! | The following and followed relationships between `fromAddr` and `toAddr`                                                  |
| `namespace`     | String!       | The namespace of this connection                                                                                          |
| `alias`         | String!       | The alias set by the `fromAddress` for `toAddr`.                                                                          |
| `network`       | Network!      | The network that is given as the querying parameter                                                                       |
| `createdAt`     | String!       | The creation time of this connection                                                                                      |
| `updatedAt`     | String!       | The latest update time of this connection                                                                                 |
| `proof`         | String!       | The proof of this connection. Please see [CyberConnect Proof of Connection](./proof) for detail design and implementation |

For `followStatus`, there will be two boolean variables: `isFollowed` and `isFollowing`.

If `isFollowed` is true, `toAddr` has followed `fromAddr`.

If `isFollowing` is true, `fromAddr` has followed `toAddr`.

## Examples

### Fetch Proof Example

To fetch proof data, simply run:

```graphql
query ProofQuery {
  connections(
    fromAddr: "51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr"
    toAddrList: ["EPBtp2MmAM68CBnt8KBCMoKzwpQtQ486hWehDhGrtKi8"]
    network: SOLANA
  ) {
    fromAddr
    toAddr
    proof
  }
}
```

The expected return would be:

```json
{
  "data": {
    "connections": [
      {
        "fromAddr": "51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr",
        "toAddr": "EPBtp2MmAM68CBnt8KBCMoKzwpQtQ486hWehDhGrtKi8",
        "proof": "{\"operation\":\"{\\\"name\\\":\\\"follow\\\",\\\"from\\\":\\\"51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr\\\",\\\"to\\\":\\\"EPBtp2MmAM68CBnt8KBCMoKzwpQtQ486hWehDhGrtKi8\\\",\\\"namespace\\\":\\\"CyberConnect\\\",\\\"network\\\":\\\"SOLANA\\\",\\\"alias\\\":\\\"\\\",\\\"timestamp\\\":1645500266794}\",\"digest\":\"0xf8dd7b357e8b738a3ad91080ccea4b07003a2c967b631ba950c2a3e00ff64cf2\",\"signature\":\"0x103fb899c224244740cf1eaa16ce401b218ae85fc0507ca07d29f91b57cf9708a5d6cdede97dc326663fe4f432f52c1ddaef9fb21b8d06f93e6893548aae825c\",\"signingKey\":{\"publicKey\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEngy/L6H1b5u9DVIRIFu2z6Tn+qgkn60NyaAJVbBnTDEQ/PjdvilGWCKUSHgPHIIqpxX9BfQHi+3e+xHKTlrFsQ==\",\"format\":\"SubjectPublicKeyInfo\",\"algorithm\":\"ES256\"},\"signingKeyAuth\":{\"authorship\":\"51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr\",\"signingKeySignature\":\"4kMtz6iCjockVhwQwGLzdGxKEESPF3EZXGFkfs2KrFs6a9YYDpRTkxAWcBWFpHjH1DFDLYkaD84TZsv4THmzCL81\",\"signingKeyMessage\":\"I authorize CyberConnect from this device using signing key:\\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEngy/L6H1b5u9DVIRIFu2z6Tn+qgkn60NyaAJVbBnTDEQ/PjdvilGWCKUSHgPHIIqpxX9BfQHi+3e+xHKTlrFsQ==\"}}"
      }
    ]
  }
}
```

### Fetch followStatus Example

To fetch followStatus, run:

```graphql
query FollowStatusQuery {
  connections(
    fromAddr: "51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr"
    toAddrList: ["EPBtp2MmAM68CBnt8KBCMoKzwpQtQ486hWehDhGrtKi8"]
    network: SOLANA
  ) {
    fromAddr
    toAddr
    followStatus {
      isFollowed
      isFollowing
    }
  }
}
```

The result should be:

```json
{
  "data": {
    "connections": [
      {
        "fromAddr": "51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr",
        "toAddr": "EPBtp2MmAM68CBnt8KBCMoKzwpQtQ486hWehDhGrtKi8",
        "followStatus": {
          "isFollowed": false,
          "isFollowing": true
        }
      }
    ]
  }
}
```

### Full Example

Try this query in the playground:

```graphql
query ConnectionsQuery {
  connections(
    fromAddr: "51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr"
    toAddrList: ["EPBtp2MmAM68CBnt8KBCMoKzwpQtQ486hWehDhGrtKi8"]
    network: SOLANA
  ) {
    fromAddr
    toAddr
    followStatus {
      isFollowed
      isFollowing
    }
    namespace
    alias
    network
    createdAt
    updatedAt
    proof
  }
}
```

The expected result is:

```json
{
  "data": {
    "connections": [
      {
        "fromAddr": "51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr",
        "toAddr": "EPBtp2MmAM68CBnt8KBCMoKzwpQtQ486hWehDhGrtKi8",
        "followStatus": {
          "isFollowed": false,
          "isFollowing": true
        },
        "namespace": "CyberConnect",
        "alias": "",
        "network": "SOLANA",
        "createdAt": "2022-02-22T03:05:27Z",
        "updatedAt": "2022-02-22T03:24:27Z",
        "proof": "{\"operation\":\"{\\\"name\\\":\\\"follow\\\",\\\"from\\\":\\\"51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr\\\",\\\"to\\\":\\\"EPBtp2MmAM68CBnt8KBCMoKzwpQtQ486hWehDhGrtKi8\\\",\\\"namespace\\\":\\\"CyberConnect\\\",\\\"network\\\":\\\"SOLANA\\\",\\\"alias\\\":\\\"\\\",\\\"timestamp\\\":1645500266794}\",\"digest\":\"0xf8dd7b357e8b738a3ad91080ccea4b07003a2c967b631ba950c2a3e00ff64cf2\",\"signature\":\"0x103fb899c224244740cf1eaa16ce401b218ae85fc0507ca07d29f91b57cf9708a5d6cdede97dc326663fe4f432f52c1ddaef9fb21b8d06f93e6893548aae825c\",\"signingKey\":{\"publicKey\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEngy/L6H1b5u9DVIRIFu2z6Tn+qgkn60NyaAJVbBnTDEQ/PjdvilGWCKUSHgPHIIqpxX9BfQHi+3e+xHKTlrFsQ==\",\"format\":\"SubjectPublicKeyInfo\",\"algorithm\":\"ES256\"},\"signingKeyAuth\":{\"authorship\":\"51je9UThqqhcZbVgY9kZgASthAVCafgqNGDaW3vpyXrr\",\"signingKeySignature\":\"4kMtz6iCjockVhwQwGLzdGxKEESPF3EZXGFkfs2KrFs6a9YYDpRTkxAWcBWFpHjH1DFDLYkaD84TZsv4THmzCL81\",\"signingKeyMessage\":\"I authorize CyberConnect from this device using signing key:\\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEngy/L6H1b5u9DVIRIFu2z6Tn+qgkn60NyaAJVbBnTDEQ/PjdvilGWCKUSHgPHIIqpxX9BfQHi+3e+xHKTlrFsQ==\"}}"
      }
    ]
  }
}
```
