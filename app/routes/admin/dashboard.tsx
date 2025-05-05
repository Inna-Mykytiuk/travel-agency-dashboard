import { Header, StatsCard, TripCard } from 'components'

const Dashboard = () => {
  const user = { name: "Alexander" }
  const dashboardStats = {
    totalUsers: 12450,
    userJoined: {
      currentMonth: 218,
      lastMonth: 176
    },
    totalTrips: 3210,
    tripsCreated: {
      currentMonth: 150,
      lastMonth: 250
    },
    userRole: {
      total: 62,
      currentMonth: 25,
      lastMonth: 15
    }
  }

  const { totalUsers, userJoined, totalTrips, tripsCreated, userRole } = dashboardStats


  return (
    <section className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destionations in real time."
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={userJoined.currentMonth}
            lastMonthCount={userJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Total Users"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>

      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>
        <div className='trip-grid'>
          <TripCard
            // key={trip.id}
            id={""}
            name={"Trip to Bali"}
            imageUrl={""}
            location={""}
            tags={["Adventure", "Relaxing"]}
            price={"2312"}

          />
        </div>
      </section>
    </section>
  )
}

export default Dashboard
