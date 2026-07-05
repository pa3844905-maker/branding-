import { motion } from 'framer-motion'

const stats = [
  {label:'Projects Completed', value:'150+'},
  {label:'Happy Clients', value:'95+'},
  {label:'Years Experience', value:'4+'},
  {label:'Client Satisfaction', value:'98%'}
]

export default function About(){
  return (
    <section id="about" className="py-20">
      <motion.h2 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} className="text-2xl font-semibold">About Hamsha Studio</motion.h2>
      <motion.p className="mt-4 max-w-2xl text-gray-700">Hamsha Studio is a creative digital agency focused on helping startups, entrepreneurs, and businesses establish a strong online presence. We combine creativity, strategy, and technology to create beautiful brands and high-converting websites.</motion.p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s=> (
          <motion.div key={s.label} whileHover={{y:-6}} className="bg-white/60 p-6 rounded-xl shadow-soft glass border border-white/30 text-center">
            <div className="text-2xl font-semibold">{s.value}</div>
            <div className="text-sm text-gray-600 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
