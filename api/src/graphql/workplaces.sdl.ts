export const schema = gql`
  type Workplace {
    id: String!
    name: String
    createdAt: DateTime!
    updatedAt: DateTime!
    clientBusiness: ClientBusiness!
    clientBusinessId: String!
    address: Address!
    addressId: String!
  }

  type Query {
    workplaces: [Workplace!]! @requireAuth
    workplace(id: String!): Workplace @requireAuth
  }

  input CreateWorkplaceInput {
    name: String
    clientBusinessId: String!
    addressId: String!
  }

  input UpdateWorkplaceInput {
    name: String
    clientBusinessId: String
    addressId: String
  }

  type Mutation {
    createWorkplace(input: CreateWorkplaceInput!): Workplace! @requireAuth
    updateWorkplace(id: String!, input: UpdateWorkplaceInput!): Workplace!
      @requireAuth
    deleteWorkplace(id: String!): Workplace! @requireAuth
  }
`
