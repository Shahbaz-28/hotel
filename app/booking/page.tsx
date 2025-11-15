'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'

const allRooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    price: 3200,
    priceHourly: 450,
    image: '/deluxe-luxury-hotel-suite-with-king-bed.jpg',
    description: 'Spacious suite with premium amenities',
    amenities: ['King Bed', 'AC', 'WiFi', 'TV', 'Mini Bar', 'Work Desk'],
    capacity: 2,
    size: '35 sqm'
  },
  {
    id: 'ocean',
    name: 'Ocean View Room',
    price: 4500,
    priceHourly: 650,
    image: '/ocean-view-luxury-hotel-room-at-sunset.jpg',
    description: 'Breathtaking sea views with modern comfort',
    amenities: ['Sea View', 'King Bed', 'Balcony', 'AC', 'Spa Bath', 'Premium Toiletries'],
    capacity: 2,
    size: '40 sqm'
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    price: 4800,
    priceHourly: 700,
    image: '/presidential-luxury-suite-with-grand-design.jpg',
    description: 'Ultimate luxury and elegance',
    amenities: ['Living Area', 'King Bed', 'Jacuzzi', 'Premium Bar', 'Personal Safe', 'Concierge'],
    capacity: 4,
    size: '85 sqm'
  },
  {
    id: 'garden',
    name: 'Garden Room',
    price: 2800,
    priceHourly: 400,
    image: '/garden-luxury-hotel-room-with-private-patio.jpg',
    description: 'Serene garden setting with outdoor access',
    amenities: ['Queen Bed', 'Garden View', 'Terrace', 'AC', 'WiFi', 'Coffee Maker'],
    capacity: 2,
    size: '32 sqm'
  },
  {
    id: 'penthouse',
    name: 'Penthouse',
    price: 4800,
    priceHourly: 700,
    image: '/luxury-penthouse-suite-with-skyline-view.jpg',
    description: 'Exclusive rooftop luxury with panoramic views',
    amenities: ['360° View', 'Private Pool', 'Cinema Room', 'Chef\'s Kitchen', 'Sunset Deck', 'Helicopter Pad'],
    capacity: 6,
    size: '200 sqm'
  },
  {
    id: 'romantic',
    name: 'Romantic Studio',
    price: 2200,
    priceHourly: 350,
    image: '/cozy-romantic-hotel-studio-room.jpg',
    description: 'Intimate space perfect for couples',
    amenities: ['Queen Bed', 'Fireplace', 'Champagne Bar', 'Spa Tub', 'Rose Garden', 'Mood Lighting'],
    capacity: 2,
    size: '28 sqm'
  }
]

export default function BookingPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [expandedRoom, setExpandedRoom] = useState<string | null>(null)
  const [bookingType, setBookingType] = useState('daily')
  const [formData, setFormData] = useState({
    bookingType: 'daily',
    room: '',
    checkInDate: '',
    checkOutDate: '',
    timeSlot: '',
    name: '',
    email: '',
    phone: '',
    guests: '1'
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoom(roomId)
    setFormData(prev => ({ ...prev, room: roomId }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const selectedRoomData = allRooms.find(room => room.id === selectedRoom)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm">COMPLETE YOUR STAY</span>
          <h1 className="font-serif text-5xl font-bold text-foreground mt-2">Find Your Perfect Room</h1>
          <p className="text-foreground/60 mt-4">Browse all available rooms and book your luxury retreat</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Available Rooms Grid */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Available Rooms</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {allRooms.map((room) => (
                <Card
                  key={room.id}
                  className={`overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedRoom === room.id
                      ? 'ring-2 ring-primary shadow-lg'
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedRoom(room.id)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={room.image || '/placeholder.svg'}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                    {selectedRoom === room.id && (
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                        <div className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                          Selected
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground">{room.name}</h3>
                    <p className="text-foreground/60 text-sm mt-2">{room.description}</p>

                    {/* Pricing */}
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-bold text-primary">₹{room.price}</span>
                      <span className="text-foreground/60 text-sm">/night</span>
                      <span className="text-foreground/60 text-xs ml-auto">₹{room.priceHourly}/hr</span>
                    </div>

                    {/* Quick Info */}
                    <div className="mt-4 flex gap-4 text-sm text-foreground/60">
                      <span>{room.size}</span>
                      <span>•</span>
                      <span>Up to {room.capacity} guests</span>
                    </div>

                    {/* Expandable Details */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedRoom(expandedRoom === room.id ? null : room.id)
                      }}
                      className="mt-4 w-full flex items-center justify-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      {expandedRoom === room.id ? 'Hide' : 'View'} Amenities
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedRoom === room.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedRoom === room.id && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="grid grid-cols-2 gap-2">
                          {room.amenities.map((amenity, idx) => (
                            <div key={idx} className="text-sm text-foreground/70 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {amenity}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {selectedRoomData && (
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/20 to-background">
                <div className="mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={selectedRoomData.image || '/placeholder.svg'}
                        alt={selectedRoomData.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-foreground">{selectedRoomData.name}</h2>
                      <p className="text-foreground/60 mt-1">{selectedRoomData.description}</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Booking Type */}
                  <div>
                    <label className="block font-semibold text-foreground mb-4">Booking Type</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['daily', 'hourly'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setBookingType(type)
                            setFormData(prev => ({ ...prev, bookingType: type }))
                          }}
                          className={`p-4 rounded-lg border-2 transition-all text-center font-medium capitalize ${
                            bookingType === type
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border text-foreground hover:border-primary/50'
                          }`}
                        >
                          {type === 'daily' ? 'Daily Booking' : 'Hourly Booking'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-8" />

                  {/* Date Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-foreground mb-2">
                        {bookingType === 'daily' ? 'Check-in Date' : 'Date'}
                      </label>
                      <input
                        type="date"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    {bookingType === 'daily' && (
                      <div>
                        <label className="block font-semibold text-foreground mb-2">Check-out Date</label>
                        <input
                          type="date"
                          name="checkOutDate"
                          value={formData.checkOutDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    )}
                    {bookingType === 'hourly' && (
                      <div>
                        <label className="block font-semibold text-foreground mb-2">Time Slot</label>
                        <select
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select time...</option>
                          <option value="09-12">09:00 - 12:00</option>
                          <option value="12-15">12:00 - 15:00</option>
                          <option value="15-18">15:00 - 18:00</option>
                          <option value="18-21">18:00 - 21:00</option>
                          <option value="21-24">21:00 - 24:00</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block font-semibold text-foreground mb-2">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="border-t border-border pt-8" />

                  {/* Personal Information */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-6">Your Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-semibold"
                  >
                    {submitted ? '✓ Booking Submitted!' : `Book ${selectedRoomData.name}`}
                  </Button>

                  <p className="text-center text-sm text-foreground/50">
                    A confirmation email will be sent to your provided email address.
                  </p>
                </form>
              </Card>
            </div>
          )}

          {!selectedRoom && (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">Select a room to start your booking</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
