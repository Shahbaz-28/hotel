import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    price: 3200,
    priceHourly: 450,
    image: '/deluxe-luxury-hotel-suite-with-king-bed.jpg',
    description: 'Spacious suite with premium amenities'
  },
  {
    id: 2,
    name: 'Ocean View Room',
    price: 4500,
    priceHourly: 650,
    image: '/ocean-view-luxury-hotel-room-at-sunset.jpg',
    description: 'Breathtaking sea views with modern comfort'
  },
  {
    id: 3,
    name: 'Presidential Suite',
    price: 4800,
    priceHourly: 700,
    image: '/presidential-luxury-suite-with-grand-design.jpg',
    description: 'Ultimate luxury and elegance'
  }
]

export default function FeaturedRooms() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm">OUR COLLECTION</span>
          <h2 className="font-serif text-4xl font-bold text-foreground mt-2">Featured Rooms & Properties</h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Handpicked luxury accommodations designed for discerning travelers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
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
                  <h3 className="font-serif text-xl font-bold text-foreground">{room.name}</h3>
                  <p className="text-foreground/60 text-sm mt-1">{room.description}</p>
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

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/rooms">
              View All Properties <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
