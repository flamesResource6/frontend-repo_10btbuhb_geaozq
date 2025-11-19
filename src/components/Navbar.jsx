import { Menu, FlaskConical } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Case studies', href: '#showcase' },
    { label: 'Quality & compliance', href: '#capabilities' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20 text-blue-400">
              <FlaskConical size={18} />
            </div>
            <span className="font-semibold tracking-tight">Helix Clinical</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 font-medium text-white shadow hover:bg-blue-600 transition-colors">
              Request a proposal
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-blue-100 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-blue-100 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 font-medium text-white shadow hover:bg-blue-600" onClick={() => setOpen(false)}>
              Request a proposal
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
