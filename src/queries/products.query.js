export const productsQuery = `{
    shop {
      products(first: 5) {
        edges {
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
}`;