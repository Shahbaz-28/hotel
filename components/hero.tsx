'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function Hero() {
  const hotelImages = [
    '/luxury-ocean-view-hotel.png',
    '/luxury-hotel-spa-and-pool-area.jpg',
    '/luxury-hotel-restaurant.png',
    '/luxury-hotel-bedroom-elegant-design.jpg',
    '/luxury-hotel-lobby-chandelier.png',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hotelImages.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [hotelImages.length])

  return (
    <section className="relative h-screen pt-20 bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${hotelImages[currentImageIndex]})`,
          opacity: 0.3
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <div className="space-y-6 max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight">
            <span className="text-primary">Luxe</span> Stays
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-light">
            Discover exquisite accommodations and unforgettable experiences in our handpicked collection of luxury properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/rooms">Explore Rooms</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
