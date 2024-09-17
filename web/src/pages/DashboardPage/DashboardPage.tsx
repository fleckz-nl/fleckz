import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { Metadata } from '@redwoodjs/web'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'src/components/ui/card'
import { formatToEuros } from 'src/lib/formatToEuros'

const DashboardPage = () => {
  const data = [
    {
      jobProfileName: 'Verpleegkundige',
      hoursWorked: 380,
      paid: 35000,
      budget: 37000,
      hoursConfirmed: 360,
      hoursCompleted: 350,
      shiftsConfirmed: 45,
      shiftsCompleted: 44,
    },
    {
      jobProfileName: 'Leraar',
      hoursWorked: 320,
      paid: 28000,
      budget: 26000,
      hoursConfirmed: 310,
      hoursCompleted: 300,
      shiftsConfirmed: 39,
      shiftsCompleted: 38,
    },
    {
      jobProfileName: 'Softwareontwikkelaar',
      hoursWorked: 400,
      paid: 45000,
      budget: 43000,
      hoursConfirmed: 390,
      hoursCompleted: 380,
      shiftsConfirmed: 49,
      shiftsCompleted: 48,
    },
    {
      jobProfileName: 'Administratief Medewerker',
      hoursWorked: 370,
      paid: 30000,
      budget: 32000,
      hoursConfirmed: 350,
      hoursCompleted: 340,
      shiftsConfirmed: 44,
      shiftsCompleted: 43,
    },
    {
      jobProfileName: 'Projectmanager',
      hoursWorked: 420,
      paid: 50000,
      budget: 49000,
      hoursConfirmed: 410,
      hoursCompleted: 405,
      shiftsConfirmed: 52,
      shiftsCompleted: 51,
    },
    {
      jobProfileName: 'Grafisch Ontwerper',
      hoursWorked: 350,
      paid: 32000,
      budget: 31000,
      hoursConfirmed: 340,
      hoursCompleted: 330,
      shiftsConfirmed: 43,
      shiftsCompleted: 41,
    },
    {
      jobProfileName: 'Verkoopmedewerker',
      hoursWorked: 300,
      paid: 25000,
      budget: 24000,
      hoursConfirmed: 290,
      hoursCompleted: 280,
      shiftsConfirmed: 37,
      shiftsCompleted: 35,
    },
    {
      jobProfileName: 'Magazijnmedewerker',
      hoursWorked: 360,
      paid: 27000,
      budget: 28000,
      hoursConfirmed: 350,
      hoursCompleted: 345,
      shiftsConfirmed: 44,
      shiftsCompleted: 43,
    },
    {
      jobProfileName: 'Marketing Specialist',
      hoursWorked: 400,
      paid: 41000,
      budget: 42000,
      hoursConfirmed: 390,
      hoursCompleted: 385,
      shiftsConfirmed: 49,
      shiftsCompleted: 48,
    },
    {
      jobProfileName: 'Klantenservice Medewerker',
      hoursWorked: 340,
      paid: 29000,
      budget: 30000,
      hoursConfirmed: 330,
      hoursCompleted: 325,
      shiftsConfirmed: 42,
      shiftsCompleted: 41,
    },
  ]

  const tempAgenciesData = [
    {
      name: 'FlexWerken',
      noShowProportion: 0.15,
    },
    {
      name: 'Uitzendkracht Plus',
      noShowProportion: 0.3,
    },
    {
      name: 'WerkDirect',
      noShowProportion: 0.05,
    },
    {
      name: 'Tijdelijk Talent',
      noShowProportion: 0.2,
    },
  ].sort((a, b) => b.noShowProportion - a.noShowProportion)

  return (
    <>
      <Metadata title="Dashboard" description="Dashboard page" />

      <div className="grid gap-2 md:grid-cols-2">
        <Card className="rounded-md bg-white px-4 py-2">
          <CardHeader>
            <CardTitle>Uren uitgevraagd</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={500}>
              <BarChart
                data={data.toSorted((a, b) => b.hoursWorked - a.hoursWorked)}
                height={70}
                layout="vertical"
              >
                <XAxis type="number" />
                <YAxis type="category" dataKey={'jobProfileName'} width={190} />
                <Tooltip formatter={(e) => `${e} uren`} />
                <Bar
                  dataKey={'hoursWorked'}
                  fill="midnightblue"
                  name={'Uren uitgevraagd'}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="rounded-md bg-white px-4 py-2">
          <CardHeader>
            <CardTitle>Budget vergelijking</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={500}>
              <BarChart
                data={data.toSorted((a, b) => b.budget - a.budget)}
                height={70}
                layout="vertical"
              >
                <XAxis type="number" tickFormatter={(e) => formatToEuros(e)} />
                <YAxis type="category" dataKey={'jobProfileName'} width={200} />
                <Tooltip formatter={(e) => formatToEuros(e as number)} />
                <Bar dataKey={'budget'} fill="midnightblue" name={'Budget'} />
                <Bar dataKey={'paid'} fill="green" name={'Betaald'} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="rounded-md bg-white px-4 py-2">
          <CardHeader>
            <CardTitle>Medewerkers (koppen)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={500}>
              <BarChart
                data={data.toSorted(
                  (a, b) => b.hoursCompleted - a.hoursCompleted
                )}
                height={70}
                layout="vertical"
              >
                <XAxis type="number" />
                <YAxis type="category" dataKey={'jobProfileName'} width={200} />
                <Tooltip formatter={(e) => `${e} keer`} />
                <Bar
                  dataKey={'shiftsConfirmed'}
                  fill="midnightblue"
                  name={'Bevestigingen'}
                />
                <Bar
                  dataKey={'shiftsCompleted'}
                  fill="green"
                  name={'Check-ins'}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="rounded-md bg-white px-4 py-2">
          <CardHeader>
            <CardTitle>Slechtste leveringen</CardTitle>
            <CardDescription>Grootste percentage no-shows</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={500}>
              <BarChart
                data={tempAgenciesData.map((a) => ({
                  ...a,
                  noShowProportion: a.noShowProportion * 100,
                }))}
                height={70}
                layout="vertical"
              >
                <XAxis type="number" unit={'%'} />
                <YAxis type="category" dataKey={'name'} width={150} />
                <Tooltip formatter={(e) => `${e}%`} />
                <Bar
                  dataKey={'noShowProportion'}
                  name={'No-shows'}
                  fill="crimson"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default DashboardPage
