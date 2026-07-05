import { motion } from 'framer-motion'

const projects = [
  {title:'Luxe Café Branding', type:'Logo Design'},
  {title:'Luxury Fashion Store', type:'Shopify'},
  {title:'Medical Clinic', type:'WordPress'},
  {title:'SaaS Landing Page', type:'UI Design'},
  {title:'Nova Studio', type:'Branding'}
]

export default function Portfolio(){
  return (
    <section id="portfolio" className="py-20">
      <h3 className="text-2xl font-semibold">Portfolio</h3>
      <p className="mt-2 text-gray-600 max-w-xl">Selected projects showcasing premium design and craft.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p,i)=> (
          <motion.div key={p.title} whileHover={{scale:1.02}} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.08}} className="bg-white/60 p-6 rounded-xl shadow-soft glass border border-white/30">
            <div className="h-40 bg-lightgray rounded-md mb-4 flex items-center justify-center text-gray-500">Mockup: {p.title}</div>
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-gray-600 mt-1">{p.type}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
