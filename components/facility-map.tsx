import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function FacilityMap() {
  return (
    <>
      <section className="px-6 py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/facility-bg.png"
            alt="Background"
            fill
            className="object-cover object-top"
            priority
            className="object-cover scale-110"
            style={{
            objectPosition: "center 20%"
            }}
          />
        </div>
        
       
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6" data-aos="fade-in-left">
              <div className="text-red-700  font-bold">FACILITY MAP</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                EVERY FLOOR.<br />EVERY DEVICE.<br />FULLY PROTECTED.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                See how our fire systems are
deployed across a real facility.
              </p>
              <button className="text-red-600 hover:text-red-700 font-bold text-sm flex items-center gap-2 transition">
                EXPLORE ALL SYSTEMS
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div
  className="relative h-[500px] lg:h-[400px] w-full"
  data-aos="fade-in-right"
>
  {/* White Frame */}
  <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl"></div>

  {/* Black Screen */}
  <div className="absolute inset-3 bg-black rounded-2xl overflow-hidden">
    <Image
      src="/facility-map.png"
      alt="Interactive Facility Map"
      fill
      priority
      className="object-contain"
    />
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  )
}
