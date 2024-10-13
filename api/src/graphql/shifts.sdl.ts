export const schema = gql`
  type Shift {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String
    workerName: String
    status: ShiftStatus!
    workRequest: WorkRequest
    workRequestId: String
    rating: Int
    tempAgency: TempAgency
    checkedInAt: DateTime
    checkedOutAt: DateTime
  }

  enum ShiftStatus {
    UNFULFILLED
    FULFILLED
  }

  type Query {
    shifts: [Shift!]! @requireAuth
    shift(id: String!): Shift @requireAuth
  }

  input CreateShiftInput {
    status: ShiftStatus!
    workRequestId: String
    rating: Int
  }

  input UpdateShiftInput {
    status: ShiftStatus
    workRequestId: String
    rating: Int
    tempAgencyId: String
  }

  type Mutation {
    createShift(input: CreateShiftInput!): Shift! @requireAuth
    updateShift(id: String!, input: UpdateShiftInput!): Shift! @requireAuth
    unassignAgency(id: String!): Shift! @requireAuth
    deleteShift(id: String!): Shift! @requireAuth
  }
`
