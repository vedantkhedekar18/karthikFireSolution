import Image from 'next/image'

export default function BuildingVisualization() {
  const systems = [
    {
      title: 'SPRINKLER SYSTEM',
      description: 'Automatic sprinklers activated by heat',
      icon: '💧'
    },
    {
      title: 'FIRE ALARM SYSTEM',
      description: 'Early detection, instant alerts',
      icon: '🔔'
    },
    {
      title: 'FIRE EXTINGUISHER',
      description: 'Rapid response for initial stage',
      icon: '🧯'
    },
    {
      title: 'HYDRANT SYSTEM',
      description: 'High pressure water supply',
      icon: '🚰'
    },
    {
      title: 'SMOKE DETECTION',
      description: '24/7 monitoring for smoke & heat',
      icon: '💨'
    },
    {
      title: 'SUPPRESSION SYSTEM',
      description: 'Advanced systems for critical environments',
      icon: '⚙️'
    }
  ]

  return (
    <section className="px-6 py-20 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-4">
            {systems.slice(0, 3).map((system, idx) => (
              <div key={idx} className="border border-red-600/30 rounded p-4 hover:border-red-600 transition">
                <div className="text-red-600 font-bold text-sm mb-1">{system.title}</div>
                <div className="text-gray-400 text-sm">{system.description}</div>
              </div>
            ))}
          </div>

          {/* Center Building Image */}
          <div className="flex justify-center">
            <div className="relative w-full h-96">
              <Image
                src="/building-3d.png"
                alt="3D Fire Protection Building Visualization"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-4">
            {systems.slice(3, 6).map((system, idx) => (
              <div key={idx} className="border border-red-600/30 rounded p-4 hover:border-red-600 transition text-right">
                <div className="text-red-600 font-bold text-sm mb-1">{system.title}</div>
                <div className="text-gray-400 text-sm">{system.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
