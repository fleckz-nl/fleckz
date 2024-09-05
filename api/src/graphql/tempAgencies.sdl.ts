export const schema = gql`
  type TempAgency {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    phone: String!
    email: String!
    address: Address
    addressId: String
  }

  type Query {
    tempAgencies: [TempAgency!]! @requireAuth
    tempAgency(id: String!): TempAgency @requireAuth
  }

  input CreateTempAgencyInput {
    name: String!
    phone: String!
    email: String!
    addressId: String
  }

  input UpdateTempAgencyInput {
    name: String
    phone: String
    email: String
    addressId: String
  }

  type Mutation {
    createTempAgency(input: CreateTempAgencyInput!): TempAgency! @requireAuth
    updateTempAgency(id: String!, input: UpdateTempAgencyInput!): TempAgency!
      @requireAuth
    deleteTempAgency(id: String!): TempAgency! @requireAuth
  }
`
