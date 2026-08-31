import Navbar from '../components/Navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import PopularRoutes from '../components/Routes/PopularRoutes.jsx'
import Features from '../components/Features/Features.jsx'
import HowItWorks from '../components/HowItWorks/HowItWorks.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import FAQ from '../components/FAQ/FAQ.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Home() {
  return (
    <div className="bg-paper bg-grain min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PopularRoutes />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
