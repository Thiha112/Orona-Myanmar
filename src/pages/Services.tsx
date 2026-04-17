import { Link } from 'react-router-dom';
import { Package, Wrench, CircleAlert as AlertCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Passenger Elevators',
      description: 'Modern, reliable elevators for commercial and residential buildings. Customizable designs with advanced traffic management systems.',
      icon: '🛗',
      features: ['Energy-efficient motors', 'Advanced safety systems', 'Smooth cabin experience', 'Capacity up to 2500kg']
    },
    {
      id: 2,
      title: 'Freight Elevators',
      description: 'Heavy-duty solutions designed for warehouses, factories, and commercial operations with high capacity requirements.',
      icon: '📦',
      features: ['Reinforced structure', 'Heavy-duty performance', 'Durable finishes', 'Capacity up to 5000kg']
    },
    {
      id: 3,
      title: 'Escalators',
      description: 'Efficient people-moving systems for shopping malls, airports, and transit stations with minimal maintenance needs.',
      icon: '🔄',
      features: ['Variable speeds', 'Energy recovery', 'Wide variety of widths', 'Easy maintenance']
    },
    {
      id: 4,
      title: 'Moving Walks',
      description: 'Horizontal and inclined moving walkways for airports, stations, and large commercial centers.',
      icon: '🚶',
      features: ['Smooth operation', 'High capacity', 'Low maintenance', 'Weather-resistant options']
    },
    {
      id: 5,
      title: 'Installation Services',
      description: 'Professional installation with certified technicians ensuring compliance with all safety standards and regulations.',
      icon: '🔧',
      features: ['Expert team', 'Quality control', 'On-time delivery', 'Full coordination']
    },
    {
      id: 6,
      title: 'Maintenance & Support',
      description: '24/7 preventive maintenance programs and emergency support to keep your systems running optimally.',
      icon: '🛠️',
      features: ['24/7 Emergency service', 'Preventive maintenance', 'Spare parts availability', 'Regular inspections']
    }
  ];

  return (
    <div className="bg-white">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-gray-50 border-b border-gray-200">
        <div className="container-section text-center">
          <h1 className="mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive vertical transportation solutions for every need</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card p-8 flex flex-col">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From consultation to installation and beyond</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h4 className="font-semibold mb-2">Consultation</h4>
              <p className="text-gray-600 text-sm">We analyze your needs and recommend the perfect solution</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-gray-600 text-sm">Custom design tailored to your building specifications</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h4 className="font-semibold mb-2">Installation</h4>
              <p className="text-gray-600 text-sm">Professional installation with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h4 className="font-semibold mb-2">Support</h4>
              <p className="text-gray-600 text-sm">Ongoing maintenance and 24/7 emergency support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="text-blue-600" size={32} />
              </div>
              <h4 className="font-semibold mb-2 text-2xl">500+</h4>
              <p className="text-gray-600">Successful installations across Myanmar</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-green-600" size={32} />
              </div>
              <h4 className="font-semibold mb-2 text-2xl">15+</h4>
              <p className="text-gray-600">Years of industry experience</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="text-orange-600" size={32} />
              </div>
              <h4 className="font-semibold mb-2 text-2xl">24/7</h4>
              <p className="text-gray-600">Emergency support and response</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-600 text-white">
        <div className="container-section text-center">
          <h2 className="text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 text-blue-100">Our experts can design and implement systems tailored to your specific requirements</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
