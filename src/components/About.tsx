import { MapPin, Award, TrendingUp, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-green-700 font-semibold text-sm tracking-wider uppercase bg-green-100 px-4 py-2 rounded-full">
                About DGN Export
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Leading Cotton Exporter from Turkmenistan
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DGN EXPORT is your trusted partner for premium quality cotton from Turkmenistan.
              We specialize in sourcing and exporting the finest cotton varieties, meeting international
              standards and exceeding customer expectations worldwide.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our commitment to quality, competitive pricing, and reliable delivery has made us a
              preferred choice for businesses across the globe. With deep roots in Turkmenistan's
              rich cotton heritage, we bring you products that represent excellence and authenticity.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
                  <p className="text-sm text-gray-600">International standards certified</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Competitive Pricing</h3>
                  <p className="text-sm text-gray-600">Best value for your business</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Global Reach</h3>
                  <p className="text-sm text-gray-600">Worldwide shipping available</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Trusted Partner</h3>
                  <p className="text-sm text-gray-600">Reliable and professional service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-cotton.png"
                alt="Cotton field"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Sourced from</p>
                  <p className="text-xl font-bold text-gray-900">Turkmenistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
