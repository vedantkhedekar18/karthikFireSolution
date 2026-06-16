export default function CoreValues() {
  const values = [
    {
      icon: '💎',
      title: 'Demand Excellence',
      description: ''
    },
    {
      icon: '🎯',
      title: 'Responsive & Result Oriented',
      description: ''
    },
    {
      icon: '🏆',
      title: 'Quality & Trust',
      description: ''
    },
    {
      icon: '❤️',
      title: 'Commitment',
      description: ''
    },
    {
      icon: '📈',
      title: 'Continuous Improvement & Innovation',
      description: ''
    }
  ]

  return (
    <>
      <section className="px-6 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-red-600 text-sm font-bold">OUR CORE VALUES</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="text-center space-y-3 p-6" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="text-5xl">{value.icon}</div>
                <h3 className="text-white font-bold text-sm leading-tight">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
