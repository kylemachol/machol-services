import { Star, Quote, CheckCircle } from 'lucide-react';

// Featured testimonial - the best one
const featuredTestimonial = {
  name: 'Sarah Mitchell',
  location: 'Downtown Canton',
  rating: 5,
  text: 'Robert installed three ceiling fans in our home and did an absolutely amazing job. He was on time, incredibly professional, and left everything spotless. The attention to detail was impressive - he even cleaned up dust we didn\'t know was there! Highly recommend Machol Services to anyone looking for a reliable handyman.',
  initials: 'SM',
  gradient: 'from-brand-blue to-brand-blue-dark',
};

const testimonials = [
  {
    name: 'Michael Torres',
    location: 'Riverstone',
    rating: 5,
    text: 'Finally found a reliable handyman! He fixed our garage door issue that had been driving us crazy for months. Fair price and great work.',
    initials: 'MT',
    gradient: 'from-brand-yellow-dark to-brand-yellow',
  },
  {
    name: 'Jennifer Kim',
    location: 'Hickory Flat',
    rating: 5,
    text: 'The bathroom caulking and grout work looks brand new. Robert really takes pride in his work and it shows. Will definitely call again.',
    initials: 'JK',
    gradient: 'from-brand-blue-dark to-brand-blue',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 blueprint-pattern opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-yellow/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-brand-yellow font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-brand-yellow"></span>
            Testimonials
            <span className="w-8 h-px bg-brand-yellow"></span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what Canton homeowners have to say.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-12">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Large quote decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-1/4 -translate-y-1/4" aria-hidden="true">
              <Quote className="w-full h-full text-brand-blue/5" />
            </div>

            <div className="relative grid md:grid-cols-[auto,1fr] gap-8 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${featuredTestimonial.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                  {featuredTestimonial.initials}
                </div>
                <div className="mt-4 flex gap-0.5" role="img" aria-label={`${featuredTestimonial.rating} out of 5 stars`}>
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Verified Customer
                  </span>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                  &ldquo;{featuredTestimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-brand-blue-dark text-lg">{featuredTestimonial.name}</p>
                  <p className="text-gray-500">{featuredTestimonial.location}, GA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {testimonial.initials}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/60">{testimonial.location}, GA</p>
                    </div>
                    <div className="flex gap-0.5" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Rating */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">5.0</span>
            </div>

            <div className="w-px h-8 bg-white/20" />

            {/* Count */}
            <div className="text-center">
              <p className="text-white font-semibold">
                <span className="text-brand-yellow">100+</span> Happy Customers
              </p>
              <p className="text-sm text-white/60">in the Canton area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
