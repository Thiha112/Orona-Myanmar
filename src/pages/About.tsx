import { Award, Globe, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-gray-50 border-b border-gray-200">
        <div className="container-section text-center">
          <h1 className="mb-4">About Orona Myanmar</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Leading Myanmar's vertical transportation revolution with European engineering excellence</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">Orona Myanmar is part of the Orona Group, a European leader in vertical transportation solutions with over 60 years of industry experience. We established our operations in Myanmar to bring world-class elevator and escalator technology to the growing Southeast Asian market.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">As Myanmar's urbanization accelerates, our commitment is to provide safe, efficient, and sustainable vertical transportation solutions that connect communities and drive economic growth.</p>
              <p className="text-gray-600 leading-relaxed">With a team of certified engineers and technicians, we combine European quality standards with local market expertise to deliver exceptional service to our clients.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl h-96 flex items-center justify-center text-white text-center p-8">
              <div>
                <p className="text-6xl mb-4">60+</p>
                <p className="text-xl">Years of Global Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">Principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="mb-3">Quality</h3>
              <p className="text-gray-600 text-sm">We never compromise on quality. Every product meets strict European standards.</p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="text-green-600" size={32} />
              </div>
              <h3 className="mb-3">Sustainability</h3>
              <p className="text-gray-600 text-sm">Energy-efficient solutions that protect the environment for future generations.</p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={32} />
              </div>
              <h3 className="mb-3">Safety</h3>
              <p className="text-gray-600 text-sm">Passenger safety is our top priority in every design and maintenance decision.</p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="text-red-600" size={32} />
              </div>
              <h3 className="mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">We strive for excellence in service, technology, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-gray-200">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals committed to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h4 className="font-semibold text-center mb-2">Engineering Team</h4>
              <p className="text-gray-600 text-sm text-center mb-4">European-trained engineers with extensive experience in vertical transportation design and implementation.</p>
              <div className="bg-blue-50 p-3 rounded text-center">
                <p className="text-sm text-gray-600"><span className="font-semibold text-blue-600">20+</span> certified professionals</p>
              </div>
            </div>

            <div className="card p-8">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h4 className="font-semibold text-center mb-2">Maintenance Specialists</h4>
              <p className="text-gray-600 text-sm text-center mb-4">Certified technicians providing 24/7 support and preventive maintenance services.</p>
              <div className="bg-green-50 p-3 rounded text-center">
                <p className="text-sm text-gray-600"><span className="font-semibold text-green-600">15+</span> dedicated technicians</p>
              </div>
            </div>

            <div className="card p-8">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h4 className="font-semibold text-center mb-2">Customer Support</h4>
              <p className="text-gray-600 text-sm text-center mb-4">Responsive team dedicated to addressing your needs and providing exceptional service.</p>
              <div className="bg-orange-50 p-3 rounded text-center">
                <p className="text-sm text-gray-600"><span className="font-semibold text-orange-600">24/7</span> availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-600 text-white">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Installations</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-blue-100">Uptime Record</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-blue-100">Safety Compliance</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-blue-100">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-gray-200">
        <div className="container-section">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="mb-6 text-center">Our European Heritage</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">Part of the Orona Group, a Spanish company founded in 1964, Orona Myanmar benefits from decades of innovation and expertise. The parent company operates in 12 European countries and distributes equipment to over 100 markets worldwide with 250,000 elevators installed globally.</p>
            <p className="text-gray-600 leading-relaxed">This international experience and commitment to quality informs everything we do in Myanmar, ensuring our clients receive world-class solutions backed by global resources and expertise.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
