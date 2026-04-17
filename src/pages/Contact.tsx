import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          service: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-gray-50 border-b border-gray-200">
        <div className="container-section text-center">
          <h1 className="mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're here to help. Contact our team for inquiries, support, or project consultations.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="mb-2">Address</h3>
              <p className="text-gray-600 text-sm">No.69, Bohmu Ba Htoo Road, North Dagon, Yangon, Myanmar</p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-green-600" size={32} />
              </div>
              <h3 className="mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+959964449990" className="hover:text-blue-600">+95 9 940002391</a>
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-orange-600" size={32} />
              </div>
              <h3 className="mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:contact@oronamy.com" className="hover:text-blue-600">contact@oronamy.com</a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Send us a Message</h2>
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                  Thank you! Your inquiry has been received. We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Service Interest *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    <option value="passenger-elevator">Passenger Elevators</option>
                    <option value="freight-elevator">Freight Elevators</option>
                    <option value="escalators">Escalators</option>
                    <option value="moving-walks">Moving Walks</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="modernization">Modernization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field"
                    rows={5}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div>
              <h2 className="mb-6">Contact Information</h2>

              <div className="card p-8 mb-6">
                <h3 className="mb-4 flex items-center space-x-2">
                  <Clock className="text-blue-600" size={24} />
                  <span>Business Hours</span>
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="card p-8 bg-blue-50 border border-blue-200">
                <h3 className="mb-4">Emergency Support</h3>
                <p className="text-gray-600 mb-4">For urgent maintenance or emergency services, call us anytime.</p>
                <a href="tel:+959964449990" className="inline-block btn-primary">
                  +95 9 940002391
                </a>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition">f</a>
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition">in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
