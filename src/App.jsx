import { ContractEarnings } from './components/ContractEarnings/ContractEarnings.jsx'
import { StatEarnings } from './components/StatEarnings/StatEarnings.jsx'
import { LebronClicker } from './components/LebronClicker/LebronClicker.jsx'
import { Header } from './components/Header/Header.jsx'
function App() {
  return (
    <>
      <Header />
      <LebronClicker />
      <ContractEarnings />
      <StatEarnings />
    </>
  )
}

export default App
