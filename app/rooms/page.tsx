'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const allRooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    price: 3200,
    priceHourly: 450,
    image: '/deluxe-luxury-hotel-suite-with-king-bed.jpg',
    category: 'Suite',
    amenities: ['King Bed', 'City View', 'Premium Linens']
  },
  {
    id: 2,
    name: 'Ocean View Room',
    price: 4500,
    priceHourly: 650,
    image: '/ocean-view-luxury-hotel-room-at-sunset.jpg',
    category: 'Ocean View',
    amenities: ['Ocean View', 'Balcony', 'Marble Bathroom']
  },
  {
    id: 3,
    name: 'Presidential Suite',
    price: 4800,
    priceHourly: 700,
    image: '/presidential-luxury-suite-with-grand-design.jpg',
    category: 'Suite',
    amenities: ['Living Area', 'Dining', 'Butler Service']
  },
  {
    id: 4,
    name: 'Garden Room',
    price: 2800,
    priceHourly: 400,
    image: '/garden-luxury-hotel-room-with-private-patio.jpg',
    category: 'Standard',
    amenities: ['Garden View', 'Patio', 'Spa Tub']
  },
  {
    id: 5,
    name: 'Penthouse',
    price: 4800,
    priceHourly: 700,
    image: '/luxury-penthouse-suite-with-skyline-view.jpg',
    category: 'Suite',
    amenities: ['360° View', 'Hot Tub', 'Concierge']
  },
  {
    id: 6,
    name: 'Romantic Studio',
    price: 2200,
    priceHourly: 320,
    image: '/cozy-romantic-hotel-studio-room.jpg',
    category: 'Studio',
    amenities: ['Fireplace', 'Jacuzzi', 'Wine Service']
  }
]

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['All', 'Suite', 'Ocean View', 'Standard', 'Studio']
  const filteredRooms = selectedCategory && selectedCategory !== 'All' 
    ? allRooms.filter(room => room.category === selectedCategory)
    : allRooms

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm">EXPLORE</span>
            <h1 className="font-serif text-5xl font-bold text-foreground mt-2">Our Rooms & Properties</h1>
            <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
              Discover our exquisite collection of luxury accommodations, each designed to provide the ultimate comfort and elegance.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  (!selectedCategory && category === 'All') || selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground">{room.name}</h3>
                        <p className="text-primary text-sm font-medium mt-1">{room.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {room.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span className="text-foreground/70 text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div>
                      <p className="text-foreground/60 text-xs">From per day</p>
                      <p className="font-serif text-2xl font-bold text-primary">₹{room.price}</p>
                      <p className="text-foreground/60 text-xs mt-1">₹{room.priceHourly}/hour</p>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href={`/rooms/${room.id}`}>View Details</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
