import type {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  FindUsers,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/User/UsersCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

const DELETE_USER_MUTATION: TypedDocumentNode<
  DeleteUserMutation,
  DeleteUserMutationVariables
> = gql`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const UsersList = ({ users }: FindUsers) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteUserMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }
  async function setClipboard(text: string) {
    const type = 'text/plain'
    const blob = new Blob([text], { type })
    const data = [new ClipboardItem({ [type]: blob })]
    await navigator.clipboard.write(data)
  }

  return (
    <div className="my-4 w-full overflow-x-auto">
      <h1 className="m-4 font-bold">Users</h1>
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Roles</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <button
                  onClick={async () => {
                    await setClipboard(user.id)
                    toast.success('User ID copied to clipboard')
                  }}
                  title={user.id}
                >
                  {truncate(user.id, 8)}
                </button>
              </td>
              <td>{timeTag(user.createdAt)}</td>
              <td>{timeTag(user.updatedAt)}</td>
              <td>{truncate(user.email)}</td>
              <td>{truncate(user.firstName)}</td>
              <td>{truncate(user.lastName)}</td>
              <td>{formatEnum(user.roles)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.user({ id: user.id })}
                    title={'Show user ' + user.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUser({ id: user.id })}
                    title={'Edit user ' + user.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete user ' + user.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(user.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
