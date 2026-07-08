import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="footer" className="bg-[#0B0B0B] border-t border-white/5 text-[#BDBDBD] pt-20 pb-8 relative overflow-hidden">
      
      {/* Background neon visual line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-2"
            >
              <div className="bg-accent p-2 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-2xl tracking-wider text-white">
                TRANZPIRE<span className="text-accent">GYM</span>
              </span>
            </a>
            <p className="text-xs font-light leading-relaxed max-w-sm">
              Tranzpire Gym is a premium, luxury fitness club featuring state-of-the-art equipment, certified personal trainers, dynamic group classes, and a world-class recovery zone.
            </p>
            {/* Social channels */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#161616] hover:bg-accent text-white flex items-center justify-center border border-white/5 hover:border-transparent transition-all hover:scale-105" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#161616] hover:bg-accent text-white flex items-center justify-center border border-white/5 hover:border-transparent transition-all hover:scale-105" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#161616] hover:bg-accent text-white flex items-center justify-center border border-white/5 hover:border-transparent transition-all hover:scale-105" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#161616] hover:bg-accent text-white flex items-center justify-center border border-white/5 hover:border-transparent transition-all hover:scale-105" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading text-lg tracking-wider text-white">Quick Directory</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-light">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#why-us" onClick={(e) => handleLinkClick(e, 'why-us')} className="hover:text-accent transition-colors">Why Us</a></li>
              <li><a href="#bmi" onClick={(e) => handleLinkClick(e, 'bmi')} className="hover:text-accent transition-colors">BMI Check</a></li>
              <li><a href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')} className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#trainers" onClick={(e) => handleLinkClick(e, 'trainers')} className="hover:text-accent transition-colors">Trainers</a></li>
              <li><a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')} className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')} className="hover:text-accent transition-colors">Reviews</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-heading text-lg tracking-wider text-white">Classes</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-accent transition-colors">Strength Lifts</a></li>
              <li><a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-accent transition-colors">Weight Loss</a></li>
              <li><a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-accent transition-colors">Muscle Hypertrophy</a></li>
              <li><a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-accent transition-colors">CrossFit Box</a></li>
              <li><a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-accent transition-colors">Metabolic HIIT</a></li>
              <li><a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-accent transition-colors">Powerlifting</a></li>
            </ul>
          </div>

          {/* Location / Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading text-lg tracking-wider text-white">Contact Club</h4>
            <ul className="space-y-3.5 text-xs font-light">
              <li>
                <span className="text-white font-medium block">Phone hotline:</span>
                <span className="font-mono">+91 98765 43210</span>
              </li>
              <li>
                <span className="text-white font-medium block">Mail support:</span>
                <span className="font-mono">membership@tranzpiregym.com</span>
              </li>
              <li>
                <span className="text-white font-medium block">Corporate location:</span>
                <span>Luxury Heights, 4th Floor, Sector 54, Gurugram, IN</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-[#555]">
          <p>© {currentYear} Tranzpire Gym. All Rights Reserved. Crafted with absolute precision.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#888] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#888] transition-colors">Terms of Use</a>
            <a href="#cookies" className="hover:text-[#888] transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
