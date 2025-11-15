'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const roomDetails: Record<string, any> = {
  '1': {
    name: 'Deluxe Suite',
    price: 3200,
    priceHourly: 450,
    category: 'Suite',
    images: [
      '/deluxe-luxury-hotel-suite-bedroom.jpg',
      '/deluxe-suite-bathroom.jpg',
      '/deluxe-suite-living-area.jpg',
    ],
    description: 'Experience ultimate comfort in our Deluxe Suite, featuring premium furnishings and personalized service. The spacious bedroom and separate living area provide the perfect sanctuary for relaxation.',
    amenities: [
      'King Bed with Premium Linens',
      'Separate Living Area',
      'Marble Bathroom',
      'Rain Shower',
      'Premium Toiletries',
      'Climate Control',
      'Flat-screen TV',
      'WiFi',
      'Mini Bar',
      'Work Desk'
    ]
  },
  '2': {
    name: 'Ocean View Room',
    price: 4500,
    priceHourly: 650,
    category: 'Ocean View',
    images: [
      '/ocean-view-luxury-hotel-room-bedroom.jpg',
      '/ocean-view-balcony-at-sunset.jpg',
      '/ocean-view-bathroom.jpg',
    ],
    description: 'Wake up to stunning ocean vistas. Our Ocean View Room offers breathtaking seascapes from the comfort of your private balcony, combining luxury with natural beauty.',
    amenities: [
      'Queen Bed with Ocean View',
      'Private Balcony',
      'Marble Bathroom',
      'Rainfall Showerhead',
      'Premium Amenities',
      'Air Conditioning',
      'Smart TV',
      'High-speed WiFi',
      'Minibar',
      'Binoculars for Wildlife Viewing'
    ]
  },
  '3': {
    name: 'Presidential Suite',
    price: 4800,
    priceHourly: 700,
    category: 'Suite',
    images: [
      '/presidential-luxury-suite-master-bedroom.jpg',
      '/presidential-suite-dining-room.jpg',
      '/placeholder.svg?height=600&width=800',
    ],
    description: 'The epitome of luxury and sophistication. The Presidential Suite offers expansive living spaces, world-class amenities, and personalized butler service.',
    amenities: [
      'Master Bedroom with King Bed',
      'Guest Bedroom',
      'Living Room',
      'Dining Room',
      'Multiple Bathrooms',
      'Spa Tub',
      'Sauna',
      'Personal Butler Service',
      'Chef Service Available',
      'Entertainment System'
    ]
  },
  '4': {
    name: 'Garden Room',
    price: 2800,
    priceHourly: 400,
    category: 'Standard',
    images: [
      '/garden-luxury-hotel-room-with-private-patio.jpg',
      '/garden-luxury-hotel-room-with-private-patio.jpg',
      '/placeholder.svg?height=600&width=800',
    ],
    description: 'Serene garden setting with outdoor access. Our Garden Room offers a peaceful retreat with direct access to beautifully landscaped gardens, perfect for relaxation and tranquility.',
    amenities: [
      'Queen Bed',
      'Garden View',
      'Private Patio',
      'Spa Tub',
      'Air Conditioning',
      'High-speed WiFi',
      'Coffee Maker',
      'Premium Toiletries',
      'Flat-screen TV',
      'Mini Bar'
    ]
  },
  '5': {
    name: 'Penthouse',
    price: 4800,
    priceHourly: 700,
    category: 'Suite',
    images: [
      '/luxury-penthouse-suite-with-skyline-view.jpg',
      '/luxury-penthouse-suite-with-skyline-view.jpg',
      '/placeholder.svg?height=600&width=800',
    ],
    description: 'Exclusive rooftop luxury with panoramic views. The Penthouse offers the ultimate in luxury living with breathtaking city views, private amenities, and unparalleled service.',
    amenities: [
      '360° Panoramic Views',
      'Private Pool',
      'Cinema Room',
      'Chef\'s Kitchen',
      'Sunset Deck',
      'Helicopter Pad Access',
      'King Bed',
      'Multiple Living Areas',
      'Premium Bar',
      'Personal Concierge'
    ]
  },
  '6': {
    name: 'Romantic Studio',
    price: 2200,
    priceHourly: 320,
    category: 'Studio',
    images: [
      '/cozy-romantic-hotel-studio-room.jpg',
      '/cozy-romantic-hotel-studio-room.jpg',
      '/placeholder.svg?height=600&width=800',
    ],
    description: 'Intimate space perfect for couples. Our Romantic Studio creates the perfect atmosphere for a romantic getaway with elegant decor, mood lighting, and special amenities.',
    amenities: [
      'Queen Bed',
      'Fireplace',
      'Champagne Bar',
      'Spa Tub',
      'Rose Garden Access',
      'Mood Lighting',
      'Premium Linens',
      'Air Conditioning',
      'WiFi',
      'Flat-screen TV'
    ]
  }
}

export default function RoomDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [id, setId] = useState<string | null>(null)
  const [room, setRoom] = useState<any>(null)

  useEffect(() => {
    params.then((resolvedParams) => {
      const roomId = resolvedParams.id
      setId(roomId)
      setRoom(roomDetails[roomId])
    })
  }, [params])

  if (!id || !room) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4">
          <p className="text-center text-foreground">Room not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % room.images.length)
  }

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/rooms" className="text-primary hover:text-primary/80 mb-8 inline-flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Rooms
          </Link>

          {/* Image Slider */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12 group">
            <img
              src={room.images[imageIndex] || "/placeholder.svg"}
              alt={`${room.name} - Image ${imageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Buttons */}
            {room.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {room.images.map((_: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === imageIndex ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Title & Pricing */}
              <div>
                <p className="text-primary font-semibold text-sm mb-2">{room.category}</p>
                <h1 className="font-serif text-4xl font-bold text-foreground mb-4">{room.name}</h1>
                <div className="flex gap-8">
                  <div>
                    <p className="text-foreground/60 text-sm">Per Night</p>
                    <p className="font-serif text-3xl font-bold text-primary">₹{room.price}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Per Hour</p>
                    <p className="font-serif text-3xl font-bold text-primary">₹{room.priceHourly}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">About This Room</h2>
                <p className="text-foreground/70 text-lg leading-relaxed">{room.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Amenities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {room.amenities.map((amenity: string) => (
                    <div key={amenity} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                      <span className="text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div>
              <Card className="p-8 sticky top-32 space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Ready to Book?</h3>
                  <p className="text-foreground/60 text-sm">Secure your luxurious stay today</p>
                </div>

                <div className="space-y-3 pb-6 border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Room Rate</span>
                    <span className="font-semibold text-foreground">₹{room.price}/night</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Taxes & Fees</span>
                    <span className="font-semibold text-foreground">₹{Math.round(room.price * 0.15)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-serif text-2xl font-bold text-primary">₹{Math.round(room.price * 1.15)}</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-semibold">
                  <Link href="/booking">Book Now</Link>
                </Button>

                <p className="text-center text-xs text-foreground/50">
                  Free cancellation up to 24 hours before arrival
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
