import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-primary text-text min-h-screen">
      <Head>
        <title>Hamsha Studio — Premium Digital Design</title>
        <meta name="description" content="Hamsha Studio — premium brand & web design" />
      </Head>

      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
