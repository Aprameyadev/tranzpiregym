import { motion } from 'motion/react';
import { Sparkles, Dumbbell } from 'lucide-react';

export default function CTABanner() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="cta" 
      className="relative py-28 overflow-hidden bg-black text-white text-center border-b border-white/5"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0F0F0F]" />
        
        {/* Animated fluid orbs to simulate dynamic physical energy */}
        <motion.div
          animate={{
            scale: [1, 1.3, 0.9, 1],
            rotate: [0, 90, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-[50%] -left-[20%] w-[120%] h-[150%] bg-gradient-to-tr from-accent/20 via-red-950/20 to-black rounded-full blur-[120px] opacity-75 pointer-events-none"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Spark icon */}
          <div className="p-3 bg-accent rounded-full mb-6 text-white shadow-lg shadow-accent/25 animate-bounce">
            <Dumbbell className="w-6 h-6" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading tracking-tight mb-4 select-none leading-none">
            YOUR FITNESS JOURNEY <br className="hidden sm:inline" />
            STARTS <span className="text-accent text-glow">TODAY</span>.
          </h2>

          <p className="text-[#BDBDBD] text-xs sm:text-sm md:text-base font-light max-w-xl leading-relaxed mb-10">
            Shred fat, build power, and unlock absolute athletic aesthetics with our professional coaching tier. Your peak physical form awaits.
          </p>

          <button
            onClick={scrollToPricing}
            className="px-10 py-5 bg-white text-black hover:bg-accent hover:text-white font-semibold uppercase tracking-widest text-xs transition-all hover:scale-105 duration-300 shadow-2xl hover:shadow-accent/45 cursor-pointer flex items-center gap-2"
            id="banner-join-cta"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            Join Tranzpire Gym
          </button>
        </motion.div>

      </div>
    </section>
  );
}
