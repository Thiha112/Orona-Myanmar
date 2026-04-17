import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container-section section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white mb-4">Orona Myanmar</h3>
            <p className="text-gray-400 text-sm">Leading provider of elevators, escalators, and vertical transportation solutions in Myanmar.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/services" className="hover:text-blue-400 transition">Elevators</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">Escalators</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">Maintenance</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">Installation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">Our Team</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Why Orona</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p>No.69, Bohmu Ba Htoo Road, North Dagon, Yangon, Myanmar</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+959964449990" className="hover:text-blue-400 transition">+95 9 964 449 990</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contact@oronamy.com" className="hover:text-blue-400 transition">contact@oronamy.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2026 Orona Myanmar. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">f</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">in</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
