import {
  Fan,
  DoorOpen,
  Warehouse,
  Wind,
  Home,
  SquareStack,
  Bath,
  Phone,
  Star
} from 'lucide-react';

// Featured services - most popular/impactful
const featuredServices = [
  {
    icon: Fan,
    title: 'Ceiling Fans',
    description: 'Complete ceiling fan service from assembly to installation, including lighting integration. Stay cool and save on energy bills.',
    details: ['Fan Assembly', 'Installation', 'Lighting Integration'],
    popular: true,
  },
  {
    icon: DoorOpen,
    title: 'Garage Doors',
    description: 'Professional garage door services including auto operator adjustments and quiet hinge technology for smooth, silent operation.',
    details: ['Operator Adjustments', 'Quiet Hinge Tech', 'Safety Checks'],
    popular: false,
  },
  {
    icon: Bath,
    title: 'Bathroom',
    description: 'Expert sink, tub, and shower repairs. From grout and caulking to complete shower door installation.',
    details: ['Grout & Caulking', 'Sealant Repair', 'Shower Door Install'],
    popular: false,
  },
];

// Secondary services
const secondaryServices = [
  {
    icon: Warehouse,
    title: 'Garage Improvements',
    description: 'Transform your garage with better lighting, cabinets, and shelving systems.',
    color: 'bg-brand-blue',
  },
  {
    icon: Wind,
    title: 'AC Filters',
    description: 'Air quality service from inspection to vent cleaning and filter installation.',
    color: 'bg-brand-blue-dark',
  },
  {
    icon: Home,
    title: 'Attic Flooring',
    description: 'Light material storage solutions and holiday organization assistance.',
    color: 'bg-brand-blue',
  },
  {
    icon: SquareStack,
    title: 'Doors & Screens',
    description: 'Screen and storm door installation plus window screen repairs.',
    color: 'bg-brand-blue-dark',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-blue/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-brand-yellow/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-brand-blue"></span>
            What We Do
            <span className="w-8 h-px bg-brand-blue"></span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-blue-dark mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality craftsmanship for your home improvement needs. From ceiling fans to bathroom repairs, we&apos;ve got you covered.
          </p>
        </div>

        {/* Featured Services - Large Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl p-8 card-lift border border-gray-100 overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-400">0{index + 1}</span>
              </div>

              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-6 left-6 flex items-center gap-1 bg-brand-yellow text-brand-blue-dark text-xs font-bold px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-current" />
                  Popular
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                service.popular
                  ? 'bg-brand-yellow text-brand-blue-dark'
                  : 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'
              }`}>
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-brand-blue-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Details */}
              <ul className="space-y-2 mb-6">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* Secondary Services - Compact Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryServices.map((service, index) => (
            <div
              key={service.title}
              className={`relative p-6 rounded-2xl text-white overflow-hidden ${service.color}`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 stripe-accent" />
              </div>

              {/* Number */}
              <span className="absolute top-4 right-4 text-4xl font-bold opacity-20">
                0{index + 4}
              </span>

              {/* Icon */}
              <div className="relative mb-4">
                <service.icon className="w-10 h-10 text-brand-yellow" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 relative">{service.title}</h3>
              <p className="text-sm text-white/80 relative leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <p className="text-gray-600">Don&apos;t see what you need?</p>
            <a
              href="tel:404-597-4945"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold px-6 py-3 rounded-full hover:bg-brand-blue-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call to Discuss
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
