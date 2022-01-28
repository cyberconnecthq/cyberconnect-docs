---
id: playground
---

# API Playground

You can access the API through a variety of interfaces that support GraphQL. Below are some examples of how you can use CyberConnect API:

## GraphQL

Playground: https://api.cybertino.io/connect/graphiql

:::caution

Please be sure to use https://api.cybertino.io/connect/ as URL in the playground

:::

An easy way to explore the CyberConnect API is to use your browser to access the GraphiQL interface served directly on the endpoint address. GraphiQL is an interactive interface where you can construct mutations and queries alongside easy access to the API's schema. 

**Example query**

```graphql
query IdentityQuery{
  identity(address: "0x148d59faf10b52063071eddf4aaf63a395f2d41c", network: ETH) {
    domain
  }
}
```

**Example result data**

```json
{
  "data": {
    "identity": {
      "domain": "cyberlab.eth"
    }
  }
}
```

## HTTP

You can access CyberConnect API through standard HTTP by simply sending a GraphQL query to the endpoint through a POST request. The response will be in JSON.

If you intend to use CyberConnect API in a programmatic context (like within JavaScript or Python), it is recommended to use a GraphQL client such as Relay or Apollo.

**Example using cURL**

```bash
curl https://api.cybertino.io/connect/ \
    -H 'Content-Type: application/json' \
    -d '{"query":"query {\n identity(address: \"0x7C04786F04c522ca664Bb8b6804E0d182eec505F\") {\n ens\n\t}\n}"}'
```