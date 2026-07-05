import { motion } from 'framer-motion'
import AnimatedLottie from './AnimatedLottie'

const LOTTIE_URL = 'https://lottie.host/a044a654-a4e3-4c7b-944a-53ec2dcbdcfd/v4KtAOkcFy.json'

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
          {/* Lottie animated dashboard */}
          <div className="relative z-10 w-full h-56 md:h-64">
            <AnimatedLottie src={LOTTIE_URL} style={{width:'100%',height:'100%'}} />
          </div>

          <div className="mt-4 text-xs text-gray-500">Animated dashboard preview — powered by Lottie. Replace the src URL with your exported JSON for production.</div>
        </div>
      </motion.div>
    </section>
  )
}
