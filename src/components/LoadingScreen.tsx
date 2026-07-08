import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300); // Small dismiss delay
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 bg-[#0B0B0B] z-[9999] flex flex-col items-center justify-center text-white"
          id="loading-overlay"
        >
          {/* Main Logo Graphic */}
          <div className="flex flex-col items-center gap-6 max-w-sm w-full px-6 text-center">
            
            {/* Spinning/pulsing barbell wrapper */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="w-16 h-16 bg-accent border border-accent/20 flex items-center justify-center text-white rounded-none shadow-neon"
            >
              <Dumbbell className="w-8 h-8" />
            </motion.div>

            {/* Premium Branding Text */}
            <div className="space-y-1">
              <h1 className="font-heading text-4xl sm:text-5xl tracking-widest text-white">
                TRANZPIRE<span className="text-accent text-glow">GYM</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest font-mono text-[#555]">
                INJECTING PHYSICAL ATHLETICISM
              </p>
            </div>

            {/* Custom Progress Bar */}
            <div className="w-full h-[2px] bg-white/5 relative overflow-hidden mt-4">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 bottom-0 left-0 bg-accent"
              />
            </div>

            {/* Percentage tracker */}
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
              Initializing... {Math.min(progress, 100)}%
            </span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
