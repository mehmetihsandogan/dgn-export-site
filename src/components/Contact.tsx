import { MessageCircle, Mail, Send, MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-green-700 font-semibold text-sm tracking-wider uppercase bg-green-100 px-4 py-2 rounded-full">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a Conversation
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our cotton products or ready to place an order? Reach out through your preferred communication channel.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <a
            href="https://wa.me/905413856642"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-2xl p-8 transition-all duration-300 border-2 border-green-200 hover:border-green-300 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Quick responses and instant communication for urgent inquiries.
              </p>
              <span className="text-green-700 font-semibold group-hover:underline">
                Chat with us →
              </span>
            </div>
          </a>

          <a
            href="https://t.me/the1turk"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-2xl p-8 transition-all duration-300 border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Send className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">Telegram</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Secure messaging for detailed discussions and file sharing.
              </p>
              <span className="text-blue-700 font-semibold group-hover:underline">
                Message us →
              </span>
            </div>
          </a>

          <a
            href="mailto:info@dgnexport.com"
            className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Professional correspondence for formal inquiries and documentation.
              </p>
              <span className="text-gray-700 font-semibold group-hover:underline">
                Send email →
              </span>
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">
                  Turkmenistan
                  <br />
                  Serving customers worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email Address</h3>
                <p className="text-gray-700 break-all">
                  info@dgnexport.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-700">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM (GMT+5)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-12 border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Discuss Your Cotton Needs?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our team is standing by to answer your questions, provide quotes, and help you get the premium cotton your business needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/905413856642"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact on WhatsApp</span>
            </a>

            <a
              href="mailto:info@dgnexport.com"
              className="flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl transition-all duration-300 font-semibold border-2 border-green-600 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              <span>Send an Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
