export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/elegant-luxury-hotel-lobby-with-chandelier.jpg"
              alt="Luxury hotel lobby"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-semibold text-sm">ABOUT US</span>
              <h2 className="font-serif text-4xl font-bold text-foreground mt-2">
                Welcome to Luxe Hotels
              </h2>
            </div>

            <p className="text-foreground/70 text-lg leading-relaxed">
              Experience the pinnacle of luxury and comfort. Our carefully curated selection of properties offers world-class amenities, personalized service, and unforgettable moments. Whether you're seeking a romantic getaway or a business retreat, we have the perfect accommodation for you.
            </p>

            <ul className="space-y-3">
              {['Premium accommodations', 'Personalized service', 'World-class amenities', 'Exceptional experiences'].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
