export const schema = gql`
  type JobProfile {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    yearsOfExp: Int!
    # certificates: [Certificate]!
    hourlyWageMin: Float!
    hourlyWageMax: Float!
    maxTravelDistance: Float
    isTravelReimbursed: Boolean
    isCarAvailable: Boolean
    kmAllowance: Float
    totalBudgetPerHour: Float
    comment: String
    # workRequest: [WorkRequest]!
  }

  type Query {
    jobProfiles: [JobProfile!]! @requireAuth
    jobProfile(id: String!): JobProfile @requireAuth
  }

  input CreateJobProfileInput {
    name: String!
    yearsOfExp: Int!
    hourlyWageMin: Float!
    hourlyWageMax: Float!
    maxTravelDistance: Float
    isTravelReimbursed: Boolean
    isCarAvailable: Boolean
    kmAllowance: Float
    totalBudgetPerHour: Float
    comment: String
  }

  input UpdateJobProfileInput {
    name: String
    yearsOfExp: Int
    hourlyWageMin: Float
    hourlyWageMax: Float
    maxTravelDistance: Float
    isTravelReimbursed: Boolean
    isCarAvailable: Boolean
    kmAllowance: Float
    totalBudgetPerHour: Float
    comment: String
  }

  type Mutation {
    createJobProfile(input: CreateJobProfileInput!): JobProfile! @requireAuth
    updateJobProfile(id: String!, input: UpdateJobProfileInput!): JobProfile!
      @requireAuth
    deleteJobProfile(id: String!): JobProfile! @requireAuth
  }
`
