import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
          <p className="mt-4 text-gray-700">Email<br/> <a href="mailto:hello@hamshastudio.com" className="text-accent">hello@hamshastudio.com</a></p>
          <p className="mt-2 text-gray-700">Phone<br/> +92 XXX XXXXXXX</p>
          <p className="mt-2 text-gray-700">Location<br/> Pakistan</p>
        </div>

        <motion.form className="bg-white/60 p-6 rounded-xl shadow-soft glass border border-white/30" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — form submission stub.')}}>
          <div className="grid grid-cols-1 gap-4">
            <input required name="name" placeholder="Full Name" className="p-3 rounded-md border border-white/30 bg-white/40" />
            <input required name="email" type="email" placeholder="Email" className="p-3 rounded-md border border-white/30 bg-white/40" />
            <select name="service" className="p-3 rounded-md border border-white/30 bg-white/40">
              <option>Logo Design</option>
              <option>Shopify Store</option>
              <option>WordPress Website</option>
              <option>Branding</option>
            </select>
            <textarea required name="message" placeholder="Message" className="p-3 rounded-md border border-white/30 bg-white/40 h-32" />
            <button className="bg-accent text-white px-4 py-3 rounded-lg">Let's Build Something Amazing</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
