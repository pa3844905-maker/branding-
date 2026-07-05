import { motion } from 'framer-motion'

const reviews = [
  {text:'Hamsha Studio exceeded our expectations. The branding completely transformed our business.', author:'Sarah Johnson, CEO, Nova Fashion'},
  {text:'Outstanding Shopify store with excellent speed and design.', author:'Michael Brown'},
  {text:'Professional communication and beautiful website.', author:'Emily Wilson'},
  {text:'The logo perfectly represents our brand.', author:'David Clark'},
  {text:'Highly recommended for branding projects.', author:'Jessica Lee'},
  {text:'Amazing experience from start to finish.', author:'Daniel Carter'}
]

export default function Reviews(){
  return (
    <section id="reviews" className="py-20">
      <h3 className="text-2xl font-semibold">Client Reviews</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r,i)=> (
          <motion.div key={i} whileHover={{y:-6}} className="bg-white/60 p-6 rounded-xl shadow-soft glass border border-white/30">
            <div className="text-amber-500">★★★★★</div>
            <p className="mt-3 text-gray-700">{r.text}</p>
            <div className="mt-4 text-sm text-gray-600">— {r.author}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
