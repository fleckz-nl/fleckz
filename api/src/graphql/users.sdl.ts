export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    roles: [Role]!
    workRequest: [WorkRequest]!
    address: [Address]!
    jobProfile: [JobProfile]!
    firstName: String
    lastName: String
    # certificate: [Certificate]!
  }

  enum Role {
    CLIENT
    ADMIN
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
  }

  type Mutation {
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    updateAvatarUrl(id: String!, newAvatarUrl: String!): User! @requireAuth
  }
`
