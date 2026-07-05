import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-6xl font-semibold leading-tight">We Build Brands That People Remember.</motion.h1>
        <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="mt-6 max-w-xl text-gray-700">Hamsha Studio helps businesses grow through premium logo design, Shopify stores, WordPress websites, branding, and modern web experiences.</motion.p>

        <div className="mt-8 flex gap-4">
          <motion.a whileHover={{scale:1.03}} href="#contact" className="px-5 py-3 rounded-xl bg-text text-primary font-medium">Start Your Project</motion.a>
          <motion.a whileHover={{scale:1.03}} href="#portfolio" className="px-5 py-3 rounded-xl border border-lightgray">View Portfolio</motion.a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white/60 p-6 rounded-xl shadow-soft glass border border-white/30">
            <div className="text-3xl font-semibold">150+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white/60 p-6 rounded-xl shadow-soft glass border border-white/30">
            <div className="text-3xl font-semibold">95+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
        </div>
      </div>

      <motion.div initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.3}} className="flex items-center justify-center">
        <div className="w-full max-w-md bg-gradient-to-br from-secondary/40 to-white rounded-2xl p-6 shadow-soft glass border border-white/25 relative overflow-hidden">
          {/* Animated floating dashboard */}
          <motion.div
            className="absolute -left-10 -top-8 w-40 h-40 rounded-full bg-accent/10"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />

          <motion.div
            className="absolute -right-8 -bottom-6 w-28 h-28 rounded-full bg-secondary/20"
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-28 h-8 bg-white/70 rounded-md flex items-center justify-center text-sm font-medium">Hamsha Analytics</div>
              <div className="w-10 h-10 bg-white/60 rounded-lg flex items-center justify-center">●</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <svg viewBox="0 0 300 120" className="w-full h-28" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#C8A97E" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#E8DCCB" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="300" height="120" rx="12" fill="transparent" />
                {/* small cards */}
                <motion.rect x="18" y="20" width="44" height="56" rx="6" fill="#F8F7F3" stroke="#eee" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 120 }} />
                <motion.rect x="72" y="10" width="44" height="66" rx="6" fill="#F8F7F3" stroke="#eee" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 120, delay: 0.03 }} />
                <motion.rect x="126" y="34" width="44" height="42" rx="6" fill="#F8F7F3" stroke="#eee" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 120, delay: 0.06 }} />
                <motion.rect x="180" y="4" width="88" height="72" rx="8" fill="url(#g)" opacity="0.95" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 100 }} />
              </svg>

              <div className="mt-4 flex items-center gap-3">
                <motion.div className="w-12 h-12 bg-lightgray rounded-lg flex items-center justify-center text-sm font-semibold" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>75%</motion.div>
                <div>
                  <div className="text-sm font-semibold">Conversion Rate</div>
                  <div className="text-xs text-gray-500">Last 30 days</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-end gap-2 h-12">
                  <motion.div className="bg-accent rounded-xl" style={{width: '14%'}} animate={{ height: ['28%', '70%', '28%'] }} transition={{ duration: 3.5, repeat: Infinity }} />
                  <motion.div className="bg-accent/80 rounded-xl" style={{width: '14%'}} animate={{ height: ['40%', '50%', '40%'] }} transition={{ duration: 3.8, repeat: Infinity, delay: 0.2 }} />
                  <motion.div className="bg-accent/70 rounded-xl" style={{width: '14%'}} animate={{ height: ['20%', '80%', '20%'] }} transition={{ duration: 4.2, repeat: Infinity, delay: 0.5 }} />
                  <motion.div className="bg-accent/60 rounded-xl" style={{width: '14%'}} animate={{ height: ['50%', '32%', '50%'] }} transition={{ duration: 3.2, repeat: Infinity, delay: 0.3 }} />
                  <motion.div className="bg-accent/50 rounded-xl" style={{width: '14%'}} animate={{ height: ['36%', '66%', '36%'] }} transition={{ duration: 3.9, repeat: Infinity, delay: 0.6 }} />
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">Animated dashboard preview — replace with your SVG or Lottie for production.</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
