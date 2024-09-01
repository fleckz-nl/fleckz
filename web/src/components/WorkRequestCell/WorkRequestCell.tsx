import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, CircleUserRound } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type {
  FindWorkRequestQuery,
  FindWorkRequestQueryVariables,
} from 'types/graphql'
import { z } from 'zod'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { formatToEuros } from 'src/lib/formatToEuros'

import RequestStatusCard from '../RequestStatusCard/RequestStatusCard'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Separator } from '../ui/separator'
import { Textarea } from '../ui/textarea'

export const QUERY: TypedDocumentNode<
  FindWorkRequestQuery,
  FindWorkRequestQueryVariables
> = gql`
  query FindWorkRequestQuery($id: String!) {
    workRequest: workRequest(id: $id) {
      id
      projectName
      startDate
      endDate
      status
      numWorkers
      location {
        id
        street
        houseNumber
        city
        province
        country
        postalCode
      }
      jobProfile {
        id
        name
        qualityNeeded
        yearsOfExp
        hourlyWageMin
        hourlyWageMax
        maxTravelDistance
        isTravelReimbursed
        isCarAvailable
        kmAllowance
        totalBudgetPerHour
        comment
      }
      createdBy {
        id
        # TODO: Get user names
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindWorkRequestQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

type SuccessProps = {
  className?: string
}

export const Success = ({
  workRequest,
  className,
}: CellSuccessProps<FindWorkRequestQuery, FindWorkRequestQueryVariables> &
  SuccessProps) => {
  const commentFormSchema = z.object({
    comment: z.string(),
  })

  const commentForm = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      comment: '',
    },
  })

  return (
    <div className="flex max-w-7xl flex-grow flex-wrap gap-4 bg-white">
      <div className="flex flex-col">
        <div className="bg-white py-4 pl-2 text-xl font-bold">
          <Link to={routes.overview()} className="flex items-center">
            <ArrowLeft className="mr-1 inline" /> Overzicht
          </Link>
        </div>
        <div className="ml-4 flex flex-col md:flex-row">
          <section>
            <RequestStatusCard request={workRequest} className={className} />
            <div className="mt-2 text-right">
              <h3>Op verzoek van:</h3>
              <p>Jos Janssen</p>
              <p>16 August 2024 02:00 pm</p>
            </div>
          </section>
          <section id="profile-table" className="ml-4 max-w-md">
            <table>
              <thead>
                <tr>
                  <th scope="col" className="w-2/3"></th>
                  <th scope="col" className="w-1/3"></th>
                </tr>
              </thead>
              <tbody className="leading-10">
                <tr>
                  <th className="font-normal" scope="row" align="left">
                    Aantal jaar werkervaring
                  </th>
                  <td className="text-primary">
                    {workRequest.jobProfile.yearsOfExp} jaren+
                  </td>
                </tr>
                <tr>
                  <th className="font-normal" scope="row" align="left">
                    Salaris
                  </th>
                  <td className="text-primary">
                    {formatToEuros(workRequest.jobProfile.hourlyWageMin)}-{' '}
                    {formatToEuros(workRequest.jobProfile.hourlyWageMax)}
                  </td>
                </tr>
                <tr>
                  <th className="font-normal" scope="row" align="left">
                    Max. Reisafstand
                  </th>
                  <td className="text-primary">
                    {workRequest.jobProfile.maxTravelDistance} km
                  </td>
                </tr>
                <tr>
                  <th className="font-normal" scope="row" align="left">
                    Auto beschikbaar?
                  </th>
                  <td className="text-primary">
                    {workRequest.jobProfile.isCarAvailable ? 'Ja' : 'Nee'}
                  </td>
                </tr>
                <tr>
                  <th className="font-normal" scope="row" align="left">
                    Kilometervergoeding
                  </th>
                  <td className="text-primary">
                    {formatToEuros(workRequest.jobProfile.kmAllowance)} /km
                  </td>
                </tr>
                <tr>
                  <th className="font-normal" scope="row" align="left">
                    Budget bruto per uur
                  </th>
                  <td className="text-primary">
                    {formatToEuros(workRequest.jobProfile.totalBudgetPerHour)}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <h3>Opmerking</h3>
              <p className="mx-2 mt-2 rounded-md border border-secondary/30 px-4 py-4 text-primary">
                {workRequest.jobProfile.comment}
              </p>
            </div>
          </section>
        </div>
      </div>
      <section
        id="comments"
        className="flex min-w-fit flex-grow flex-col bg-secondary px-8 py-8"
      >
        <div className="mt-4 text-white">
          <div className="font-bold">Op verzoek van:</div>
          <div>
            <CircleUserRound className="mr-2 inline text-secondary-foreground" />
            <span>MR Janssen</span>
          </div>
        </div>
        <div className="mt-4">
          <Form {...commentForm}>
            <form
              onSubmit={commentForm.handleSubmit(() => console.log('submit'))}
            >
              <FormField
                control={commentForm.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-white">
                      <CircleUserRound className="my-2 mr-2 inline text-slate-300" />
                      <span>Voeg een opmerking toe</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="m-2 min-h-40 min-w-60 border-white bg-black text-lg text-gray-300 ring-0 ring-offset-8 ring-offset-black"
                        placeholder="Voeg hier uw opmerkingen toe..."
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="outline"
                className="float-end my-4 text-secondary-foreground"
              >
                Opmerken
              </Button>
            </form>
          </Form>
        </div>
        <Separator className="my-4" />
        <div className="flex gap-2 self-end">
          <Button variant="destructive">Afwijzen</Button>
          <Button variant="default">Bevestigen</Button>
        </div>
      </section>
    </div>
  )
}
