import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, CircleCheck as CheckCircle, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import "./Slideshow.css";

export default function Home() {

  const images = [
    "https://www.orona-group.com/sites/default/files/styles/500x700/public/2021-04/Harmonia_R2_0.jpg?itok=Mfqh8MDh",
    "https://th.bing.com/th/id/OIP.eODo1S3ojpMX8YoXlDWfNQHaEK?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.OnmtOyZZnZBmhBO7A_2b9QHaFj?w=225&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  

  return (
    <div className="bg-white">
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Lifting Life with Trust - CES</h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">Orona Myanmar provides cutting-edge elevator, escalator, and vertical transportation solutions. We combine European engineering excellence with local expertise to serve Myanmar's growing commercial and residential sectors.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary text-center flex items-center justify-center">
                  Explore Services <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/contact" className="btn-secondary text-center">Get in Touch</Link>
              </div>
            </div>
            <div className="slideshow-container">
              <img
                src={images[index]}
                alt="slide"
                className="slide-image"
              />

              <button className="nav prev" onClick={prevSlide}>❮</button>
              <button className="nav next" onClick={nextSlide}>❯</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Orona Myanmar</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We deliver reliability, innovation, and exceptional service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="mb-3">Energy Efficient</h3>
              <p className="text-gray-600">Advanced technology reduces energy consumption by up to 40% while maintaining peak performance.</p>
            </div>

            <div className="card p-8">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="mb-3">Safety First</h3>
              <p className="text-gray-600">European safety standards and rigorous maintenance protocols ensure passenger safety 24/7.</p>
            </div>

            <div className="card p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-orange-600" size={32} />
              </div>
              <h3 className="mb-3">Expert Support</h3>
              <p className="text-gray-600">Our certified technicians provide professional installation and maintenance services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-12 shadow-md">
              <h3 className="mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Elevator Installation</h4>
                    <p className="text-gray-600 text-sm">Complete design and installation for residential and commercial buildings</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Escalators & Moving Walks</h4>
                    <p className="text-gray-600 text-sm">State-of-the-art escalator solutions for malls and transit systems</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Maintenance & Modernization</h4>
                    <p className="text-gray-600 text-sm">Preventive maintenance and system upgrades to extend equipment life</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
                <div className="mb-8">
                  <TrendingUp size={48} className="mb-4" />
                </div>
                <h3 className="mb-4 text-white">Growing Myanmar</h3>
                <p className="mb-6 text-blue-100">Myanmar's rapid urbanization demands reliable vertical transportation infrastructure. Orona Myanmar is committed to supporting this growth with world-class solutions.</p>
                <div className="bg-blue-500 rounded-lg p-6">
                  <p className="text-3xl font-bold mb-2">500+</p>
                  <p className="text-blue-100">Installations across Myanmar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-600 text-white">
        <div className="container-section text-center">
          <h2 className="text-white mb-4">Ready to Elevate Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact our team today for a consultation</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Get in Touch Now
          </Link>
        </div>
      </section>
    </div>
  );
}
