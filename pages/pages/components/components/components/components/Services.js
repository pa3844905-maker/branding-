import { motion } from 'framer-motion'
import { PenTool, ShoppingBag, Globe, Monitor, Sparkles } from 'lucide-react'

const services = [
  {title:'Logo Design', icon: <PenTool/>, desc:'Professional logo design with complete brand identity, color palette, typography, and social media branding.'},
  {title:'Shopify Store Design', icon: <ShoppingBag/>, desc:'High-converting Shopify stores optimized for sales, speed, mobile devices, and user experience.'},
  {title:'WordPress Website', icon: <Globe/>, desc:'Modern WordPress websites for businesses, agencies, and personal brands.'},
  {title:'Website Designing', icon: <Monitor/>, desc:'Custom responsive website UI/UX design with modern layouts and premium user experience.'},
  {title:'Branding', icon: <Sparkles/>, desc:'Complete branding including logos, brand guidelines, typography, colors, social media kits, and marketing assets.'}
]

export default function Services(){
  return (
    <section id="services" className="py-20">
      <h3 className="text-2xl font-semibold">Services</h3>
      <p className="mt-2 text-gray-600 max-w-xl">Premium services crafted to elevate your brand.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s,i)=> (
          <motion.div key={s.title} whileHover={{y:-8}} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.08}} className="p-6 bg-white/60 rounded-xl shadow-soft glass border border-white/30">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/60 rounded-lg">{s.icon}</div>
              <div>
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-gray-600">{s.desc}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
