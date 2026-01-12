'use client';

import { Phone, ChevronDown, Shield, Clock, Sparkles, Wrench, Fan, Bath, Home, DoorOpen } from 'lucide-react';

const highlights = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: 'Flexible Hours' },
  { icon: Sparkles, text: 'Spotless Cleanup' },
];

// Floating tool icons with different positions and animation delays
const floatingIcons = [
  { Icon: Wrench, className: 'top-[15%] right-[8%] w-12 h-12', delay: '0s', rotate: '-15deg' },
  { Icon: Fan, className: 'top-[35%] right-[18%] w-16 h-16', delay: '0.5s', rotate: '10deg' },
  { Icon: Bath, className: 'top-[60%] right-[5%] w-10 h-10', delay: '1s', rotate: '-8deg' },
  { Icon: Home, className: 'top-[75%] right-[22%] w-14 h-14', delay: '1.5s', rotate: '12deg' },
  { Icon: DoorOpen, className: 'top-[25%] right-[28%] w-10 h-10', delay: '0.8s', rotate: '-5deg' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center blueprint-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 stripe-accent opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[80px]" />

      {/* Geometric shape composition - right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        {/* Large circle */}
        <div className="relative w-[500px] h-[500px]">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />

          {/* Inner filled circle */}
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-blue-dark/50 backdrop-blur-sm" />

          {/* Yellow accent arc */}
          <svg className="absolute inset-0 w-full h-full -rotate-45" viewBox="0 0 200 200" aria-hidden="true">
            <path
              d="M 100 10 A 90 90 0 0 1 190 100"
              fill="none"
              stroke="#FFC20E"
              strokeWidth="4"
              strokeLinecap="round"
              className="drop-shadow-lg"
            />
          </svg>

          {/* Floating tool icons */}
          {floatingIcons.map(({ Icon, className, delay, rotate }, i) => (
            <div
              key={i}
              className={`absolute ${className} floating-icon`}
              style={{
                animationDelay: delay,
                transform: `rotate(${rotate})`
              }}
              aria-hidden="true"
            >
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                <Icon className="w-full h-full text-brand-yellow" />
              </div>
            </div>
          ))}

          {/* Center badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shadow-2xl glow-yellow">
              <Wrench className="w-10 h-10 text-brand-blue-dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
            </span>
            <span className="text-white/90 text-sm font-medium">Serving Canton, GA & Surrounding Areas</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
            Helpful Home
            <span className="block text-brand-yellow relative">
              Improvements
              {/* Underline accent */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M0 6 Q75 0, 150 6 T300 6"
                  fill="none"
                  stroke="#FFC20E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-60"
                />
              </svg>
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-white/80 mb-8 animate-fade-in-up animation-delay-200 max-w-xl leading-relaxed">
            Your local neighborhood handyman for light to medium home projects.
          </p>

          {/* Signature tagline */}
          <div className="mb-10 animate-fade-in-up animation-delay-200">
            <p className="text-brand-yellow font-semibold text-lg italic relative inline-block">
              &ldquo;We leave your house cleaner than when we started.&rdquo;
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-yellow/30"></span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up animation-delay-300">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 bg-white text-brand-blue-dark font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105"
            >
              View Services
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="tel:404-597-4945"
              className="group inline-flex items-center gap-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-blue-dark font-bold px-8 py-4 rounded-full transition-all glow-yellow hover:scale-105"
            >
              <div className="relative">
                <Phone className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              </div>
              Call Now
            </a>
          </div>

          {/* Highlights - with circle icons */}
          <div className="flex flex-wrap gap-8 animate-fade-in-up animation-delay-400">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <item.icon className="w-5 h-5 text-brand-yellow" />
                </div>
                <span className="text-white/90 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
