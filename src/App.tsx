import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import BMICalculator from './components/BMICalculator';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import CounterSection from './components/CounterSection';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen relative overflow-x-hidden selection:bg-accent selection:text-white">
      {/* 1. Global Pre-loader */}
      <LoadingScreen />

      {/* 2. Navigation */}
      <Navbar />

      {/* 3. Hero Section */}
      <Hero />

      {/* 4. About Section */}
      <About />

      {/* 5. Programs Section */}
      <Programs />

      {/* 6. Why Us Section */}
      <WhyUs />

      {/* 7. Counter Section */}
      <CounterSection />

      {/* 8. BMI Calculator */}
      <BMICalculator />

      {/* 9. Membership Pricing */}
      <Pricing />

      {/* 10. Transformation Gallery */}
      <Gallery />

      {/* 11. Trainer Section */}
      <Trainers />

      {/* 12. Testimonials Carousel */}
      <Testimonials />

      {/* 13. High-energy Call to Action Banner */}
      <CTABanner />

      {/* 14. Contact & Styled Location Map */}
      <Contact />

      {/* 15. Footnotes & Social Indices */}
      <Footer />

      {/* 16. Quick action WhatsApp & scroll buttons */}
      <FloatingButtons />
    </div>
  );
}
