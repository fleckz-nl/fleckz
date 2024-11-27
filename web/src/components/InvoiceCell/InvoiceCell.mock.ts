// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  invoice: {
    __typename: 'Invoice' as const,
    id: 42,
  },
})
