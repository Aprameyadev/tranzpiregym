import { motion } from 'motion/react';
import { Check, Star, Zap } from 'lucide-react';
import { pricingPlans } from '../data/gymData';

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="pricing" 
      className="py-24 sm:py-32 bg-[#0B0B0B] text-white relative overflow-hidden border-b border-white/5"
    >
      {/* Background visual graphics */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-xs font-mono uppercase tracking-widest block mb-3"
          >
            Memberships
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-heading tracking-tight"
          >
            SELECT YOUR <span className="text-accent">MEMBERSHIP</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#BDBDBD] text-sm sm:text-base font-light leading-relaxed mt-4"
          >
            Flexible elite tier arrangements designed to match your training schedule and personal athletic ambitions. No hidden sign-up fees.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative bg-[#161616] p-8 border flex flex-col justify-between transition-all duration-300 ${
                plan.popular 
                  ? 'border-accent shadow-neon scale-100 md:scale-[1.03] z-10' 
                  : 'border-white/5 hover:border-accent/40 shadow-2xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 flex items-center gap-1 shadow-lg shadow-accent/20">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Most Popular
                </div>
              )}

              {/* Top Details */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-heading text-2xl tracking-wider uppercase text-white">
                    {plan.name}
                  </h3>
                  {plan.popular && <Zap className="w-5 h-5 text-accent animate-pulse" />}
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl sm:text-5xl font-heading text-white">₹{plan.price}</span>
                  <span className="text-xs text-[#BDBDBD] font-mono lowercase">/ {plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-accent/10 text-accent' : 'bg-white/5 text-[#BDBDBD]'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-[#BDBDBD] font-light leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Button */}
              <div>
                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer text-center flex items-center justify-center ${
                    plan.popular
                      ? 'bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  Acquire Membership
                </button>
                <p className="text-center text-[10px] text-[#555] font-mono mt-3 uppercase tracking-wider">
                  Cancel anytime • Secure gateway
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
