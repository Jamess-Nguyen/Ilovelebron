import { ContractEarnings } from './components/ContractEarnings/ContractEarnings.jsx';
import { StatEarnings } from './components/StatEarnings/StatEarnings.jsx';
import { LebronClicker } from './components/LebronClicker/LebronClicker.jsx';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { YouTubeEmbed } from './components/YoutubeEmbed/YoutubeEmbed.jsx';
import './app.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <LebronClicker />
      <ContractEarnings />
      <StatEarnings />
      <YouTubeEmbed />
      <Footer />
    </div>
  )
}

export default App
