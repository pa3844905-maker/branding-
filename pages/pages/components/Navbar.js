import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const links = ['Home','About','Services','Portfolio','Reviews','Contact']

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-accent font-semibold text-lg">Hamsha Studio</div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l=> (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm hover:text-accent transition">{l}</a>
          ))}
          <motion.a whileHover={{scale:1.03}} whileTap={{scale:0.98}} href="#contact" className="bg-accent text-white px-4 py-2 rounded-lg text-sm shadow-soft">Get Free Consultation</motion.a>
        </div>

        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} aria-label="menu">
            {open? <X/> : <Menu/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/70 backdrop-blur-sm border-t border-white/30">
          <div className="flex flex-col px-6 py-4 gap-3">
            {links.map(l=> (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-text py-2">{l}</a>
            ))}
            <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-lg text-sm">Get Free Consultation</a>
          </div>
        </div>
      )}
    </nav>
  )
}
