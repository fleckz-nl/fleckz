export const schema = gql`
  type Comment {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    body: String!
    workRequest: WorkRequest!
    commentedBy: User!
    userId: String!
    workRequestId: String!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: String!): Comment @requireAuth
  }

  input CreateCommentInput {
    body: String!
    userId: String!
    workRequestId: String!
  }

  input UpdateCommentInput {
    body: String
    userId: String
    workRequestId: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: String!, input: UpdateCommentInput!): Comment!
      @requireAuth
    deleteComment(id: String!): Comment! @requireAuth
  }
`
