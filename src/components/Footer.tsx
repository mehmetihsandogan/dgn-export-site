import { MessageCircle, Mail, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
  src="/logo.png"
  alt="DGN EXPORT Logo"
  className="w-14 h-14 object-contain rounded-full border-2 border-white/20 bg-white/10"
/>
              <div>
                <h3 className="text-2xl font-bold">DGN EXPORT</h3>
                <p className="text-sm text-gray-400">Premium Cotton from Turkmenistan</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Your trusted partner for high-quality cotton export. We deliver excellence from the heart of Turkmenistan to businesses worldwide.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://wa.me/905413856642"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="https://t.me/the1turk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>

              <a
                href="mailto:info@dgnexport.com"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block text-sm font-semibold text-gray-300 mb-1">Email</span>
                <a href="mailto:info@dgnexport.com" className="hover:text-white transition-colors">
                  info@dgnexport.com
                </a>
              </li>
              <li>
                <span className="block text-sm font-semibold text-gray-300 mb-1">Website</span>
                <a href="https://dgnexport.com" className="hover:text-white transition-colors">
                  www.dgnexport.com
                </a>
              </li>
              <li>
                <span className="block text-sm font-semibold text-gray-300 mb-1">Location</span>
                <span>Turkmenistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} DGN EXPORT. All rights reserved.
            </p>

            <p className="text-gray-400 text-sm">
              Premium Cotton Export from Turkmenistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
