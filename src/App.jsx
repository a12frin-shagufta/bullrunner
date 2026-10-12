import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Latest from './components/Latest'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <Stats />
      <Latest />
      <Footer />
    </div>
  )
}