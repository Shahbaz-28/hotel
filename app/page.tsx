import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import FeaturedRooms from '@/components/featured-rooms'
import MenuSection from '@/components/menu-section'
import MapSection from '@/components/map-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <FeaturedRooms />
      <MenuSection />
      <MapSection />
      <Footer />
    </main>
  )
}
