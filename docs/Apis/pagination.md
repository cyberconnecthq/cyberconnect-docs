---
id: pagination
---

# Pagination

Pagination is a feature in CyberConnect Indexer endpoints. Pagination refers to methods for programmatically requesting all of the pages, in order to retrieve the whole result data set. Not all API endpoints support pagination, but it is often used when result sets are large. 

Users can retrieve lists from CyberConnect Indexer by using `first` and `after` parameters. The `first` request parameter enable you configure the number of entries returned per response page. The default value of `first` parameter is 20 and the maximum value is 50. The `after` request parameter points to the end of the page of data that has been returned. 

:::info
Please note that you should set `after` as "-1" for the first query of full elements since the index of an array starts from zero.
:::


All CyberConnect Indexer endpoints with pagination return a `BasicInfoConnection` object with two fields:

* `pageInfo`
* `list`

`list` is result for this single query. For `pageInfo`, there are 4 fields:

* `startCursor`: Starting index of this query
* `endCursor`: Ending index of this query
* `hasNextPage`: A boolean variable indicating whether the next page of data exists
* `hasPreviousPage`: A boolean variable indicating whether this query is the first page of data

For your pagination query, it can be a series of queries begins with `first` as 50, and `after` as "-1" (please notice it's a string variable), and then increase `after` parameter by the batch size you set progressively, until `hasNextPage` returned by the server turns into false.
