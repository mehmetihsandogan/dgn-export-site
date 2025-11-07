import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
