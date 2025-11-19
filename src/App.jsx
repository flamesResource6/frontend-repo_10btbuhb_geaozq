import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Showcase />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-200/70">© {new Date().getFullYear()} Helix Clinical. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-xs text-blue-200/70">
            <a href="#capabilities" className="hover:text-white">Capabilities</a>
            <a href="#showcase" className="hover:text-white">Case studies</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
