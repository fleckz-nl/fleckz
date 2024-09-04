export const schema = gql`
  type Shift {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    status: ShiftStatus!
    workRequest: WorkRequest
    workRequestId: String
    rating: Int
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
  }

  type Mutation {
    createShift(input: CreateShiftInput!): Shift! @requireAuth
    updateShift(id: String!, input: UpdateShiftInput!): Shift! @requireAuth
    deleteShift(id: String!): Shift! @requireAuth
  }
`
