import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container-section">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="logo">
              <img src="/src/assets/logo.png" alt="Orona Myanmar Logo" className="h-12 w-auto" />
            </div>
            <span className="text-xl font-bold text-gray-900">Orona Myanmar</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent border-b md:border-b-0 md:top-auto flex-col md:flex-row`}>
            <Link to="/" className="block md:inline px-4 md:px-0 py-3 md:py-0 text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="block md:inline px-4 md:px-0 py-3 md:py-0 text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/about" className="block md:inline px-4 md:px-0 py-3 md:py-0 text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="block md:inline px-4 md:px-0 py-3 md:py-0 btn-primary text-center mb-4 md:mb-0">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
