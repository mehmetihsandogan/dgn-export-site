import { Shield, Clock, Leaf, DollarSign, Globe2, Truck } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every batch is carefully inspected and tested to meet international quality standards. We guarantee premium cotton that exceeds expectations.',
  },
  {
    icon: Clock,
    title: 'Always Ready',
    description: 'Our inventory is continuously stocked and ready for immediate shipment. No delays, no waiting periods.',
  },
  {
    icon: Leaf,
    title: 'Natural Excellence',
    description: 'Sourced from the pristine fields of Turkmenistan, our cotton is grown in optimal conditions for superior quality and natural purity.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Direct sourcing and efficient operations allow us to offer the most competitive prices without compromising on quality.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'We ship worldwide with established logistics partners, ensuring your cotton arrives safely and on schedule, wherever you are.',
  },
  {
    icon: Truck,
    title: 'Reliable Logistics',
    description: 'Professional packaging and experienced shipping partners guarantee your cotton arrives in perfect condition, every time.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-green-700 font-semibold text-sm tracking-wider uppercase bg-green-100 px-4 py-2 rounded-full">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Cotton Export Partner
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With DGN EXPORT, you're not just buying cotton – you're partnering with a reliable, experienced team committed to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-green-700" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Order?
              </h3>
              <p className="text-green-50 text-lg mb-8 leading-relaxed">
                Join hundreds of satisfied customers worldwide who trust DGN EXPORT for their cotton needs. Contact us today to discuss your requirements and receive a competitive quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors text-center shadow-lg"
                >
                  Get in Touch
                </a>
                <a
                  href="https://wa.me/905413856642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-800 transition-colors text-center border-2 border-white/20"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>

            <div className="hidden lg:block h-full">
              <img
                src="/last.png"
                alt="Cotton quality"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
