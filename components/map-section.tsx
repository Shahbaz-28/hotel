export default function MapSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm">LOCATION</span>
          <h2 className="font-serif text-4xl font-bold text-foreground mt-2">Find Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="h-96 bg-muted rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290255!2d-74.00601592346895!3d40.71282571110327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e4a7d0f1%3A0xf5b1e36d1d0f0c0f!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Luxe Hotels</h3>
              <p className="text-foreground/70">456 Fifth Avenue, New York, NY 10022, USA</p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-primary font-semibold text-sm">PHONE</p>
                <a href="tel:+12125551234" className="text-foreground hover:text-primary transition-colors">
                  +1 (212) 555-1234
                </a>
              </div>
              <div>
                <p className="text-primary font-semibold text-sm">EMAIL</p>
                <a href="mailto:info@luxehotels.com" className="text-foreground hover:text-primary transition-colors">
                  info@luxehotels.com
                </a>
              </div>
              <div>
                <p className="text-primary font-semibold text-sm">HOURS</p>
                <p className="text-foreground">Mon - Sun: 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
