import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800" id="contact">
      {/* Main Footer */}
      <div className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Karthik Fire Solution Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-bold text-white text-sm">KARTHIK</div>
                <div className="text-red-600 text-xs">FIRE SOLUTION</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We deliver end-to-end fire protection systems and compliance services designed to safeguard lives, assets and operations.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4 lg:ml-25">
            <h3 className="text-white font-bold text-sm">OUR SERVICES</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-600 transition">Inspection</a></li>
              <li><a href="#" className="hover:text-red-600 transition">System Design</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Installation</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Testing</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Maintenance</a></li>
              <li><a href="#" className="hover:text-red-600 transition">Certification</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm">CONTACT INFO</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                <span>Grd Floor, Bhim Nagar, New Link Rd,New Qureshi Shopping Centre,Behram Baug, Mumbai- 400102</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>91+ 98929 34337</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>karthikfiresolution@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-600/10 border border-red-600/30 rounded p-6 mb-8">
          <div className="text-center space-y-2">
            <div className="text-red-600 text-sm font-bold">FOR ASSISTANCE</div>
            <div className="text-white font-bold text-3xl">8369237441</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <div>© 2024 Karthik Fire Solution. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
