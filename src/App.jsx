import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ProgressBar } from './components/LebronEarnings/ProgressBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProgressBar />
    </>
  )
}

export default App
