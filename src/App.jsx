import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Work />
        <CTA />
      </main>
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400" />
            <span className="text-sm text-slate-300">© {new Date().getFullYear()} Lucent</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
