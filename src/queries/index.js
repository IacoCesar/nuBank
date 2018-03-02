import gql from 'graphql-tag'

export const offers = gql`
    query {
        viewer {
            id
            name
            balance
            offers{
              id
              price
              product {
                name
                image
                description
              }
            }
        }
    }`

export const payment = gql`
    mutation purchase($offerId: ID!) {
        purchase(
            offerId: $offerId
        ){
            success
            errorMessage
            customer {
                balance
                name
                id
            }
        }
    }
`
