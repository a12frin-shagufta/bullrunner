  import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* /xrp, /altcoins, /security ... — resolved from src/data/posts.js */}
        <Route path="/:slug" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  )
}