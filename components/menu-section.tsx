'use client'

import { useState } from 'react'

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Grilled Atlantic Salmon',
    description: 'Fresh salmon fillet with herbs and lemon butter sauce',
    price: 800,
    image: '/dish-salmon.jpg',
    category: 'Main Course'
  },
  {
    id: 2,
    name: 'Truffle Risotto',
    description: 'Creamy arborio rice with black truffle and parmesan',
    price: 200,
    image: '/dish-risotto.jpg',
    category: 'Main Course'
  },
  {
    id: 3,
    name: 'Wagyu Beef Steak',
    description: 'Premium Japanese Wagyu with roasted vegetables',
    price: 900,
    image: '/dish-wagyu.jpg',
    category: 'Main Course'
  },
  {
    id: 4,
    name: 'Pan-Seared Scallops',
    description: 'Delicate scallops with citrus beurre blanc',
    price: 500,
    image: '/dish-scallops.jpg',
    category: 'Main Course'
  },
  {
    id: 5,
    name: 'Artisan Cheese Board',
    description: 'Selection of imported cheeses with fresh fruits',
    price: 3200,
    image: '/dish-cheese.jpg',
    category: 'Appetizer'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with vanilla ice cream',
    price: 800,
    image: '/dish-dessert.jpg',
    category: 'Dessert'
  }
]

export default function MenuSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
            Fine Dining Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Culinary Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in our chef's special creations, prepared with the finest ingredients and passion for perfection
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-72 mb-4 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-accent text-background px-3 py-1 rounded-full text-xs font-semibold">
                  {item.category}
                </div>

                {/* Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button className="bg-accent text-background px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-accent font-semibold text-lg">
                    ₹{item.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
