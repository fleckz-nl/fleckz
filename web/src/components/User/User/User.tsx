import type {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  FindUserById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

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

interface Props {
  user: NonNullable<FindUserById['user']>
}

const User = ({ user }: Props) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.users())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUserMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      <div>
        <header>
          <h2 className="font-bold">User {user.id}</h2>
        </header>
        <table className="rw-table bg-white">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(user.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(user.updatedAt)}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{user.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{user.lastName}</td>
            </tr>
            <tr>
              <th>Avatar url</th>
              <td>{user.avatarUrl}</td>
            </tr>
            <tr>
              <th>Roles</th>
              <td>{formatEnum(user.roles)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUser({ id: user.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(user.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default User