export const schema = gql`
  type WorkRequest {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    projectName: String!
    jobProfile: JobProfile!
    jobProfileId: String!
    startDate: DateTime!
    endDate: DateTime!
    numWorkers: Int!
    location: Address!
    addressId: String!
    status: WorkRequestStatus!
    createdBy: User
    userId: String
    shifts: [Shift]
    comments: [Comment]
  }

  enum WorkRequestStatus {
    DRAFT
    SUBMITTED
    CONFIRMED
    DONE
  }

  type Query {
    workRequests: [WorkRequest!]! @requireAuth
    workRequestsToday(date: DateTime): [WorkRequest!]! @requireAuth
    workRequest(id: String!): WorkRequest @requireAuth
  }

  input CreateWorkRequestInput {
    projectName: String!
    jobProfileId: String!
    startDate: DateTime!
    endDate: DateTime!
    numWorkers: Int!
    addressId: String!
    status: WorkRequestStatus!
    userId: String
  }

  input UpdateWorkRequestInput {
    projectName: String
    jobProfileId: String
    startDate: DateTime
    endDate: DateTime
    numWorkers: Int
    addressId: String
    status: WorkRequestStatus
  }

  type Mutation {
    createWorkRequest(input: CreateWorkRequestInput!): WorkRequest! @requireAuth
    updateWorkRequest(
      id: String!
      input: UpdateWorkRequestInput!
    ): WorkRequest! @requireAuth
    deleteWorkRequest(id: String!): WorkRequest! @requireAuth
  }
`
