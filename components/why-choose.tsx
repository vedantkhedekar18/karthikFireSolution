import Image from 'next/image'
import { Check } from 'lucide-react'

export default function WhyChoose() {
  const reasons = [
    'End-to-End Solutions',
    'Experienced Professionals',
    'Quick Response',
    'Compliance Focus',
    'Transparent Pricing'
  ]

  return (
    <section className="bg-gray-100" id="why-choose">
      <div className="max-w-7xl mx-auto flex items-stretch min-h-[280px]">

        {/* Left Content */}
        <div className="flex-1 flex items-center px-10 py-12">
          <div className="space-y-5">
            <div>
              <p className="text-red-600 text-xs font-bold tracking-widest uppercase mb-2">
                WHY CHOOSE
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-black leading-tight">
                KARTHIK FIRE SOLUTION?
              </h2>
            </div>

            <div className="space-y-2.5">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0" strokeWidth={3} />
                  <span className="text-gray-800 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Skewed Firefighter Image */}
        <div className="relative w-[45%] flex-shrink-0 py-4 pr-4">
          {/* Shadow layer — sits behind the clipped image */}
          <div
            className="absolute inset-4 bg-black/40 blur-xl translate-x-2 translate-y-2"
            style={{
              clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          />
          {/* Skewed image container with spacing */}
          <div
            className="relative w-full h-full overflow-hidden"
            style={{
              clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <Image
              src="/firefighter.png"
              alt="Firefighter in action"
              fill
              className="object-cover object-center"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

      </div>
    </section>
  )
}