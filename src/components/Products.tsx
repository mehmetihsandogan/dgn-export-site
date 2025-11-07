import { Package, CheckCircle } from 'lucide-react';

const products = [
  {
    name: 'Raw Cotton',
    grade: 'Premium Grade',
    image: "src/assets/3-1.png",
    features: ['High fiber strength', 'Natural white color', 'Low moisture content', 'Ready for processing'],
  },
  {
    name: 'Medium Staple Cotton',
    grade: 'Export Quality',
    image: "src/assets/3-2.png",
    features: ['Uniform fiber length', 'Excellent spinning quality', 'Minimal impurities', 'Competitive pricing'],
  },
  {
    name: 'Long Staple Cotton',
    grade: 'Premium Selection',
    image: "src/assets/3-3.png",
    features: ['Superior fiber length', 'Exceptional softness', 'High tensile strength', 'Premium applications'],
  },
  {
    name: 'Organic Cotton',
    grade: 'Certified Organic',
    image: "src/assets/3-4.png",
    features: ['Naturally grown', 'Chemical-free', 'Eco-friendly', 'International certification'],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-green-700 font-semibold text-sm tracking-wider uppercase bg-green-100 px-4 py-2 rounded-full">
              Our Products
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Cotton Varieties
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of high-quality cotton products, sourced directly from the finest fields of Turkmenistan. All varieties are ready for immediate shipment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-green-700">{product.grade}</span>
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Package className="w-4 h-4" />
                      <span>Ready to ship</span>
                    </div>
                    <span className="text-green-700 font-semibold">Available</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Custom Requirements?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We understand that every business has unique needs. If you're looking for specific cotton grades, quantities, or have special requirements, our team is ready to accommodate your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl transition-colors text-center font-semibold shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/905413856642"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white hover:bg-gray-50 text-gray-900 px-6 py-4 rounded-xl transition-colors text-center font-semibold border-2 border-green-600"
              >
                Quick Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
