export default function MissionVision() {
  const missionPoints = [
    'Global leadership',
    'Empowering communities',
    'Innovation in technology',
    'People first',
    'Sustainable practices',
    'Infrastructure development',
    'Contribution to society'
  ]

  return (
    <>
      <section className="px-6 py-20 bg-gray-900" id="about-us">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-red-600 text-sm font-bold">OUR MISSION & VISION</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6" data-aos="fade-in-left">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-lg">🎯</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">OUR MISSION</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Global leadership in innovative and reliable life-saving solutions, empowering communities through cutting-edge technology and committed professionals.
                  </p>
                  <ul className="space-y-2 pt-4">
                    {missionPoints.map((point, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center gap-2" data-aos="fade-in-up" data-aos-delay={idx * 50}>
                        <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6" data-aos="fade-in-right">
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
      <span className="text-white text-lg">👁️</span>
    </div>
    <div className="space-y-8 max-w-md">

      {/* Section Tag */}
      <p className="text-red-500 text font-bold tracking-widest uppercase mt-4">
        OUR VISION
      </p>

      {/* Headline */}
      <h3 className="text-3xl font-black leading-tight">
        <span className="text-white">A SAFER WORLD.</span>
        <br />
        <span className="text-red-600">BUILT BY US.</span>
      </h3>

      {/* Subtext */}
      <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
        A world where no life is lost to fire. We build the systems
        and set the standard , so every community stays protected.
      </p>

    </div>
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  )
}
