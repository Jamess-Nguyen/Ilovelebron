import { ContractEarnings } from './components/ContractEarnings/ContractEarnings.jsx'
import { StatEarnings } from './components/StatEarnings/StatEarnings.jsx'
import { LebronClicker } from './components/LebronClicker/LebronClicker.jsx'
import { Header } from './components/Header/Header.jsx'
import './app.css'
function App() {
  return (
    <div className='app-container'>
      <Header />
      <LebronClicker />
      <ContractEarnings />
      <StatEarnings />
    </div>
  )
}

export default App
