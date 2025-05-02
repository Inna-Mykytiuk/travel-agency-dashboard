import { Header } from 'components'

const Dashboard = () => {
  const user = { name: "Alexander" }
  return (
    <section className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destionations in real time."
      />
      Dashboard Page Contents
    </section>
  )
}

export default Dashboard
