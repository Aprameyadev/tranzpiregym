import { motion } from 'motion/react';
import { Star, ChevronDown, Award, Users, Shield, Calendar } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '2500+', label: 'Members', icon: Users },
    { value: '35+', label: 'Certified Trainers', icon: Award },
    { value: '12+', label: 'Years Experience', icon: Shield },
    { value: '4.9★', label: 'Google Rating', icon: Star, highlight: true },
  ];

  const scrollToSection = (id: string) => {
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
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white"
    >
      {/* Background Image with Parallax & Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920')` 
          }}
        />
        {/* Gradients to blend and highlight premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-transparent" />
      </div>

      {/* Floating Glowing Orbs (Extra Feature) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-[20%] left-[10%] w-[250px] h-[250px] bg-accent/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-[30%] right-[10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center md:text-left w-full h-full flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#BDBDBD] font-mono">
                The Zenith of Elite Fitness
              </span>
            </motion.div>

            {/* Giant Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading tracking-tight leading-none text-white mb-6 select-none max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block"
              >
                TRANSFORM YOUR <span className="text-accent text-glow">BODY</span>.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="block text-white"
              >
                TRANSFORM YOUR LIFE.
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#BDBDBD] text-sm sm:text-base lg:text-lg max-w-xl font-light leading-relaxed mb-8"
            >
              State-of-the-art equipment, certified trainers, personalized coaching, and a motivating community to help you achieve your ultimate fitness goals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-widest text-xs transition-all hover:scale-105 duration-300 shadow-lg shadow-accent/30 cursor-pointer"
                id="hero-start-cta"
              >
                Start Today
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white font-semibold uppercase tracking-widest text-xs transition-all hover:scale-105 duration-300 cursor-pointer"
                id="hero-membership-cta"
              >
                View Memberships
              </button>
            </motion.div>

          </div>
        </div>

        {/* Animated Statistics Row */}
        <div className="mt-20 lg:mt-32 border-t border-white/5 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-white/5 transition-colors duration-300 group-hover:bg-accent/20`}>
                      <Icon className={`w-5 h-5 ${stat.highlight ? 'text-accent' : 'text-[#BDBDBD]'}`} />
                    </div>
                    <span className="font-heading text-3xl sm:text-4xl tracking-wider text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#BDBDBD] font-mono">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
        id="scroll-down-indicator"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono text-[#BDBDBD]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-accent" />
      </motion.div>
    </section>
  );
}
