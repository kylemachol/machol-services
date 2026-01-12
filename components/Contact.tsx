import { Phone, Mail, Clock, MapPin, Wrench, MessageSquare, Zap, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const serviceAreas = ['Downtown Canton', 'Riverstone', 'Hickory Flat', 'Bridgemill', 'Sixes', 'Ball Ground', 'Woodstock'];

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50">
      {/* Main Contact Area */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-brand-blue"></span>
              Get In Touch
              <span className="w-8 h-px bg-brand-blue"></span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-blue-dark mb-6">
              Ready to Start <span className="text-brand-blue">Your Project?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Give us a call or send a message. We&apos;ll discuss your project and provide a fair, honest estimate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Contact Methods */}
            <div className="space-y-6">
              {/* Primary CTA - Call */}
              <a
                href="tel:404-597-4945"
                className="group block bg-brand-blue rounded-3xl p-8 text-white overflow-hidden relative"
              >
                <div className="absolute inset-0 stripe-accent opacity-10" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-4 bg-white/10 rounded-2xl">
                      <Phone className="w-8 h-8 text-brand-yellow" />
                    </div>
                    <span className="inline-flex items-center gap-1 bg-brand-yellow text-brand-blue-dark text-xs font-bold px-3 py-1 rounded-full">
                      <Zap className="w-3 h-3" />
                      Fastest Response
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Call Now</h3>
                  <p className="text-4xl font-bold text-brand-yellow mb-2 group-hover:scale-105 transition-transform inline-block">
                    404-597-4945
                  </p>
                  <p className="text-white/70">Available 3pm-8pm weekdays & weekends</p>
                </div>
              </a>

              {/* Secondary CTAs - Text & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Text/SMS */}
                <a
                  href="sms:404-597-4945"
                  aria-label="Send text message to 404-597-4945"
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-blue/10 rounded-xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <MessageSquare className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue-dark">Text Us</h4>
                      <p className="text-sm text-gray-500">Quick questions welcome</p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:macholservices@yahoo.com"
                  aria-label="Send email to macholservices@yahoo.com"
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-blue/10 rounded-xl group-hover:bg-brand-blue transition-colors">
                      <Mail className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue-dark">Email Us</h4>
                      <p className="text-sm text-gray-500 truncate">macholservices@yahoo.com</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-yellow/10 rounded-xl">
                    <Clock className="w-6 h-6 text-brand-yellow-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue-dark mb-2">Business Hours</h4>
                    <div className="space-y-1 text-gray-600">
                      <p><span className="font-medium">Weekdays:</span> 3pm - 8pm</p>
                      <p><span className="font-medium">Weekends:</span> Available by appointment</p>
                    </div>
                    <p className="text-sm text-brand-blue mt-3 font-medium">
                      Perfect for after-work home projects!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Service Area Map */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-blue/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue-dark text-lg">Service Area</h3>
                  <p className="text-sm text-gray-500">Canton, GA & Surrounding</p>
                </div>
              </div>

              {/* Illustrated Map */}
              <div className="relative h-64 bg-gradient-to-br from-brand-blue-dark/5 to-brand-blue/10 rounded-2xl overflow-hidden mb-6" role="img" aria-label="Service area map showing Downtown Canton and surrounding areas including Riverstone, Hickory Flat, Bridgemill, and Sixes">
                {/* Road pattern */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 256">
                  {/* Highway lines */}
                  <path d="M0 128 Q100 100, 200 128 T400 128" stroke="#0080C6" strokeWidth="3" fill="none" opacity="0.2" />
                  <path d="M200 0 Q220 100, 200 256" stroke="#0080C6" strokeWidth="3" fill="none" opacity="0.2" />
                  <path d="M50 50 Q150 100, 350 200" stroke="#0080C6" strokeWidth="2" fill="none" opacity="0.1" />
                </svg>

                {/* Location markers */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Downtown Canton - main */}
                  <div className="relative">
                    <div className="w-6 h-6 bg-brand-yellow rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-blue-dark rounded-full" />
                    </div>
                    <div className="absolute inset-0 w-6 h-6 bg-brand-yellow rounded-full animate-ping opacity-50" />
                    <span className="absolute left-8 top-1/2 -translate-y-1/2 text-sm font-bold text-brand-blue-dark whitespace-nowrap">
                      Downtown Canton
                    </span>
                  </div>
                </div>

                {/* Surrounding areas */}
                {[
                  { name: 'Riverstone', x: '30%', y: '35%' },
                  { name: 'Hickory Flat', x: '75%', y: '40%' },
                  { name: 'Bridgemill', x: '25%', y: '65%' },
                  { name: 'Sixes', x: '70%', y: '70%' },
                ].map((area) => (
                  <div
                    key={area.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: area.x, top: area.y }}
                  >
                    <div className="w-3 h-3 bg-brand-blue rounded-full shadow" />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-600 whitespace-nowrap">
                      {area.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Service area tags */}
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-blue-dark text-white">
        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <a href="#hero" aria-label="Machol Services - Return to top" className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded-xl">
                  <Wrench className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <span className="font-bold text-xl text-white">Machol</span>
                  <span className="font-bold text-xl text-brand-yellow">Services</span>
                </div>
              </a>
              <p className="text-white/60 mb-6 leading-relaxed">
                Helpful home improvements for the Canton area. Quality craftsmanship you can trust.
              </p>
              <p className="text-brand-yellow italic">
                &ldquo;We leave your house cleaner than when we started.&rdquo;
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-brand-yellow transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-4">
                <a href="tel:404-597-4945" className="flex items-center gap-3 text-white/70 hover:text-brand-yellow transition-colors">
                  <Phone className="w-5 h-5" />
                  404-597-4945
                </a>
                <a href="mailto:macholservices@yahoo.com" className="flex items-center gap-3 text-white/70 hover:text-brand-yellow transition-colors">
                  <Mail className="w-5 h-5" />
                  macholservices@yahoo.com
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <Clock className="w-5 h-5" />
                  <span>3pm - 8pm & Weekends</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-5 h-5" />
                  <span>Canton, GA Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-sm">
                &copy; {new Date().getFullYear()} Machol Services. All rights reserved.
              </p>
              <p className="text-white/40 text-sm">
                Made with care in Canton, GA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
