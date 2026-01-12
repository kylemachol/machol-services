import { MapPin, Clock, Heart, Sparkles, Wrench, CheckCircle, User } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Years Experience', icon: Clock },
  { value: '500+', label: 'Projects Completed', icon: CheckCircle },
  { value: '100%', label: 'Satisfaction Goal', icon: Heart },
];

const values = [
  {
    icon: MapPin,
    title: 'Local & Reliable',
    description: 'Your Canton neighbor you can count on.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: '3pm-8pm weekdays and weekends.',
  },
  {
    icon: Heart,
    title: 'Personal Service',
    description: 'Direct communication with Robert.',
  },
  {
    icon: Sparkles,
    title: 'Clean Workmanship',
    description: 'We leave it cleaner. Guaranteed.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-brand-blue"></span>
            About Us
            <span className="w-8 h-px bg-brand-blue"></span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-blue-dark mb-6">
            Your Trusted <span className="text-brand-blue">Neighborhood</span> Handyman
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Photo & Stats */}
          <div className="space-y-8">
            {/* Photo Placeholder */}
            <div className="relative">
              {/* Main photo container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden photo-placeholder">
                {/* Decorative pattern */}
                <div className="absolute inset-0 shimmer"></div>

                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border-2 border-white/20">
                    <User className="w-12 h-12 text-brand-yellow" />
                  </div>
                  <p className="text-lg font-semibold">Robert Machol</p>
                  <p className="text-sm text-white/60">Owner & Craftsman</p>
                </div>

                {/* Tool icons decoration */}
                <div className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Wrench className="w-6 h-6 text-brand-yellow" />
                </div>
              </div>

              {/* Yellow accent shape */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-yellow rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-blue/20 rounded-2xl -z-10" />
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-gray-50 rounded-2xl"
                >
                  <stat.icon className="w-5 h-5 text-brand-blue mx-auto mb-2" />
                  <p className="text-3xl font-bold text-brand-blue-dark">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            </div>

          {/* Right - Content & Values */}
          <div>
            {/* Story */}
            <div className="prose prose-lg mb-10">
              <p className="text-xl text-gray-600 leading-relaxed">
                Hi, I&apos;m <strong className="text-brand-blue-dark">Robert Machol</strong>, and I&apos;ve been helping Canton homeowners with home improvement projects for over a decade.
              </p>
              <p className="text-gray-600">
                Whether it&apos;s installing a ceiling fan, fixing up your garage, or tackling that bathroom repair you&apos;ve been putting off – I&apos;m here to help make your home better. No project is too small, and every job gets my full attention.
              </p>
            </div>

            {/* Signature tagline */}
            <div className="mb-10 p-6 bg-brand-blue-dark/5 rounded-2xl border-l-4 border-brand-yellow">
              <p className="text-lg italic text-brand-blue-dark font-medium">
                &ldquo;We leave your house cleaner than when we started.&rdquo;
              </p>
              <p className="text-sm text-gray-500 mt-2">— Our Promise</p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`p-5 rounded-2xl transition-all hover:scale-105 ${
                    index === 0
                      ? 'bg-brand-blue text-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${
                    index === 0 ? 'bg-white/20' : 'bg-brand-blue/10'
                  }`}>
                    <value.icon className={`w-5 h-5 ${
                      index === 0 ? 'text-brand-yellow' : 'text-brand-blue'
                    }`} />
                  </div>
                  <h3 className={`font-bold mb-1 ${
                    index === 0 ? 'text-white' : 'text-brand-blue-dark'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm ${
                    index === 0 ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            </div>
        </div>
      </div>
    </section>
  );
}
