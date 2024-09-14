export const schema = gql`
  type Address {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    street: String!
    houseNumber: String!
    houseNumberAddition: String
    postalCode: String!
    city: String!
    province: String
    country: String!
    workRequest: [WorkRequest]!
  }

  type Query {
    addresses: [Address!]! @requireAuth
    address(id: String!): Address @requireAuth
  }

  input CreateAddressInput {
    street: String!
    houseNumber: String!
    houseNumberAddition: String
    postalCode: String!
    city: String!
    province: String!
    country: String!
  }

  input UpdateAddressInput {
    street: String
    houseNumber: String
    houseNumberAddition: String
    postalCode: String
    city: String
    province: String
    country: String
  }

  type Mutation {
    createAddress(input: CreateAddressInput!): Address! @requireAuth
    updateAddress(id: String!, input: UpdateAddressInput!): Address!
      @requireAuth
    deleteAddress(id: String!): Address! @requireAuth
  }
`
