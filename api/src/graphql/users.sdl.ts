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
`
