import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Award, ShieldCheck, HeartPulse } from 'lucide-react';

export default function CounterSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    { target: 2500, suffix: '+', label: 'Active Members', icon: Users },
    { target: 180000, suffix: '+', label: 'Workouts Completed', icon: HeartPulse },
    { target: 12, suffix: '+', label: 'Years Experience', icon: ShieldCheck },
    { target: 950, suffix: '+', label: 'Success Stories', icon: Award }
  ];

  return (
    <section 
      ref={sectionRef}
      id="counters" 
      className="py-16 sm:py-24 bg-[#0B0B0B] text-white border-b border-white/5 relative overflow-hidden"
    >
      {/* Background neon striping */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <CounterCard 
              key={idx} 
              target={stat.target} 
              suffix={stat.suffix} 
              label={stat.label} 
              icon={stat.icon} 
              triggerAnimation={isInView}
              delayIdx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CounterCardProps {
  key?: any;
  target: number;
  suffix: string;
  label: string;
  icon: any;
  triggerAnimation: boolean;
  delayIdx: number;
}

function CounterCard({ target, suffix, label, icon: Icon, triggerAnimation, delayIdx }: CounterCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggerAnimation) return;

    let start = 0;
    const end = target;
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const animateCount = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easedProgress = progress * (2 - progress);
      const currentValue = Math.floor(easedProgress * (end - start) + start);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [triggerAnimation, target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delayIdx * 0.1 }}
      className="flex flex-col items-center text-center p-6 bg-[#161616]/50 border border-white/5 relative group hover:border-accent/20 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/5 text-[#BDBDBD] group-hover:text-accent group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300 mb-4">
        <Icon className="w-6 h-6" />
      </div>

      <span className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white flex items-center justify-center font-bold">
        {count.toLocaleString()}{suffix}
      </span>

      <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#BDBDBD] font-mono mt-2 block">
        {label}
      </span>
    </motion.div>
  );
}
