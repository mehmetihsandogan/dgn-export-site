// src/components/Products.tsx
import { CheckCircle } from 'lucide-react';

const products = [
  {
    name: 'Seed Cotton',
    grade: 'Raw Material',
    image: '/seed-cotton.png',
    features: [
      'Ideal for ginning',
      'Moisture: 8–10%',
      'Clean, uniform fiber',
      'Sourced from Turkmenistan fields',
    ],
  },
  {
    name: 'Lint Cotton',
    grade: 'Export Standard',
    image: '/lint-cotton.png',
    features: [
      'Staple length: 28–30 mm',
      'Micronaire: 4.0–4.9',
      'Bale weight ~220 kg',
      'Consistent color & strength',
    ],
  },
  {
    name: 'Long Staple Cotton',
    grade: 'Premium Selection',
    image: '/long-staple.png',
    features: [
      'Superior softness',
      'High tensile strength',
      'Preferred for fine spinning',
      'Low foreign matter',
    ],
  },
  {
    name: 'Organic Cotton',
    grade: 'Certified Eco-Friendly',
    image: '/organic-cotton.png',
    features: [
      '100% pesticide-free',
      'Sustainably grown',
      'Traceable batches',
      'Complies with GOTS standards',
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block mb-4">
          <span className="text-green-700 font-semibold text-sm tracking-wider uppercase bg-green-100 px-4 py-2 rounded-full">
            Our Cotton Varieties
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
          Quality Cotton for Every Application
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-left">
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg">{p.name}</h3>
                  <p className="text-sm text-white/90">{p.grade}</p>
                </div>
              </div>

              <ul className="p-6 space-y-3 text-left">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}