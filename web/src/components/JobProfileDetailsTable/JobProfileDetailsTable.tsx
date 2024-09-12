import { FindWorkRequestQuery } from 'types/graphql'

import { formatToEuros } from 'src/lib/formatToEuros'

type JobProfileDetailsTableProps = {
  jobProfile: FindWorkRequestQuery['workRequest']['jobProfile']
}

const JobProfileDetailsTable = ({
  jobProfile,
}: JobProfileDetailsTableProps) => {
  return (
    <section id="profile-table" className="w-full max-w-md">
      <table>
        <thead>
          <tr>
            <th scope="col" className="w-2/3"></th>
            <th scope="col" className="w-1/3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10">
            <th className="font-normal" scope="row" align="left">
              Aantal jaar werkervaring
            </th>
            <td className="text-primary">{jobProfile.yearsOfExp} jaren+</td>
          </tr>
          <tr className="h-10">
            <th className="font-normal" scope="row" align="left">
              Salaris
            </th>
            <td className="text-primary">
              {formatToEuros(jobProfile.hourlyWageMin)}-{' '}
              {formatToEuros(jobProfile.hourlyWageMax)}
            </td>
          </tr>
          <tr className="h-10">
            <th className="font-normal" scope="row" align="left">
              Max. Reisafstand
            </th>
            <td className="text-primary">{jobProfile.maxTravelDistance} km</td>
          </tr>
          <tr className="h-10">
            <th className="font-normal" scope="row" align="left">
              Auto beschikbaar?
            </th>
            <td className="text-primary">
              {jobProfile.isCarAvailable ? 'Ja' : 'Nee'}
            </td>
          </tr>
          <tr className="h-10">
            <th className="font-normal" scope="row" align="left">
              Kilometervergoeding
            </th>
            <td className="text-primary">
              {formatToEuros(jobProfile.kmAllowance)} /km
            </td>
          </tr>
          <tr className="h-10">
            <th className="font-normal" scope="row" align="left">
              Budget bruto per uur
            </th>
            <td className="text-primary">
              {formatToEuros(jobProfile.totalBudgetPerHour)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <h3>Opmerking</h3>
        <p className="mx-2 mt-2 rounded-md border border-secondary/30 px-4 py-4 text-primary">
          {jobProfile.comment}
        </p>
      </div>
    </section>
  )
}

export default JobProfileDetailsTable
