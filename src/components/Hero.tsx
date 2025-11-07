import { MessageCircle, Mail, Send } from 'lucide-react';
import heroBg from '../assets/1.png';

<div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
/>
export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("src/assets/1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
  src="/src/assets/logo.png"
  alt="DGN EXPORT Logo"
  className="w-14 h-14 object-contain rounded-full border-2 border-white/20 bg-white/10"
/>
            <div className="text-white">
              <h1 className="text-xl font-bold tracking-wide">DGN EXPORT</h1>
              <p className="text-xs text-white/80">Premium Cotton from Turkmenistan</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white/90 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#products" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Products</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Premium Quality Cotton
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 mt-2">
            From Turkmenistan
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Your trusted partner for high-quality cotton export. Ready to ship worldwide with competitive pricing and reliable service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/905413856642"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">WhatsApp</span>
          </a>

          <a
            href="https://t.me/the1turk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Send className="w-5 h-5" />
            <span className="font-semibold">Telegram</span>
          </a>

          <a
            href="mailto:info@dgnexport.com"
            className="group flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span className="font-semibold">Email</span>
          </a>
        </div>

        <div className="flex items-center justify-center space-x-12 text-white/90">
          <div>
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm">Quality Assured</div>
          </div>
          <div className="h-12 w-px bg-white/30"></div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm">Ready to Ship</div>
          </div>
          <div className="h-12 w-px bg-white/30"></div>
          <div>
            <div className="text-3xl font-bold text-white">Global</div>
            <div className="text-sm">Delivery</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="animate-bounce block">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
          </div>
        </a>
      </div>
    </div>
  );
}
