export default function Certifications() {
  const certs = [
    { name: 'COMPLIANT TO NFPA STANDARDS', icon: '🏅' },
    { name: 'APPROVED BY DRDO', icon: '🎖️' },
    { name: 'APPROVED BY GOVT. OF INDIA', icon: '🏛️' },
    { name: 'LICENSED BY CCOE', icon: '📜' },
    { name: 'MEMBER OF FSAI', icon: '🔗' },
    { name: 'FIAI REGISTERED', icon: '✅' }
  ]

  return (
    <section className="px-6 py-20 bg-black border-t border-gray-800" id="certifications">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-red-600 text-sm font-bold">TRUSTED & VERIFIED</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            APPROVAL & CERTIFICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="border border-red-600/30 rounded p-6 hover:border-red-600 hover:bg-red-600/5 transition flex flex-col items-center justify-center text-center space-y-2 min-h-32"
              data-aos="fade-in-up"
              data-aos-delay={idx * 100}
            >
              <div className="text-3xl">{cert.icon}</div>
              <p className="text-gray-400 text-xs leading-tight">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
