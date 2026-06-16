import Image from 'next/image'

export default function Services() {
  const services = [
    {
      icon: '📋',
      title: 'INSPECTION',
      description: 'Thorough site inspection to identify hazards'
    },
    {
      icon: '⚠️',
      title: 'RISK ASSESSMENT',
      description: 'Evaluate potential risks and vulnerabilities'
    },
    {
      icon: '🏗️',
      title: 'SYSTEM DESIGN',
      description: 'Customized safety solution design'
    },
    {
      icon: '🔧',
      title: 'INSTALLATION',
      description: 'Professional installation by certified experts'
    },
    {
      icon: '✅',
      title: 'TESTING',
      description: 'Rigorous system testing & validation'
    },
    {
      icon: '🎖️',
      title: 'Safety Signatures and PPE Kits',
      description: 'To promote awareness, prevent accidents, and protect workers'
    },
    {
      icon: '⚙️',
      title: 'MAINTENANCE',
      description: 'Regular maintenance for reliable performance'
    },
    {
      icon: '🎧',
      title: 'AMC SUPPORT',
      description: 'Annual maintenance contract support'
    }
  ]

  return (
    <>
      <section className="px-6 py-20 relative overflow-hidden" id="services">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4 pt-12">
            <div className="text-red-600 text-sm font-bold">OUR SERVICES</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              END-TO-END FIRE PROTECTION SOLUTIONS
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete fire safety lifecycle - from assessment to ongoing protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border border-red-600/30 rounded p-6 hover:border-red-600 hover:bg-red-600/5 transition group"
                data-aos="fade-in-up"
                data-aos-delay={idx * 100}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-white font-bold mb-2 text-sm">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
