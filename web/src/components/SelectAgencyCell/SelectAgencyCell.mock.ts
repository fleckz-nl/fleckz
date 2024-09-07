import { AgenciesQuery } from 'types/graphql'

// Define your own mock data here:
const sampleAgencies: AgenciesQuery['tempAgencies'] = [
  { id: 'agency_1', name: 'Sample Agency 1', __typename: 'TempAgency' },
  { id: 'agency_2', name: 'Sample Agency 2', __typename: 'TempAgency' },
  { id: 'agency_3', name: 'Sample Agency 3', __typename: 'TempAgency' },
  { id: 'agency_4', name: 'Sample Agency 4', __typename: 'TempAgency' },
]

export const standard = (/* vars, { ctx, req } */) => ({
  tempAgencies: sampleAgencies,
})
