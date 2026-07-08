import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data/gymData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handlePrev = () => {
    stopAutoSlide();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    startAutoSlide();
  };

  const handleDotClick = (index: number) => {
    stopAutoSlide();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    startAutoSlide();
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 sm:py-32 bg-[#0E0E0E] text-white relative overflow-hidden border-b border-white/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-mono uppercase tracking-widest block mb-3">
            Real Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading tracking-tight text-white">
            WHAT OUR <span className="text-accent text-glow">COMMUNITY</span> SAYS
          </h2>
        </div>

        {/* Carousel View Container */}
        <div 
          className="relative bg-[#161616] border border-white/5 p-8 sm:p-12 md:p-16 text-center select-none min-h-[380px] sm:min-h-[320px] flex flex-col justify-between"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Accent Quote Graphic */}
          <div className="absolute top-6 left-6 text-white/5 pointer-events-none">
            <Quote className="w-20 h-20 fill-current" />
          </div>

          <div className="relative overflow-hidden flex-1 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full flex flex-col items-center justify-center"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonialsData[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-sm sm:text-base md:text-lg text-[#BDBDBD] font-light leading-relaxed mb-8 max-w-2xl italic">
                  "{testimonialsData[currentIndex].review}"
                </blockquote>

                {/* Client Profile Row */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-accent/30 flex-shrink-0">
                    <img 
                      src={testimonialsData[currentIndex].image} 
                      alt={testimonialsData[currentIndex].name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left">
                    <cite className="font-heading text-lg tracking-wider text-white block not-italic">
                      {testimonialsData[currentIndex].name}
                    </cite>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-mono">
                      {testimonialsData[currentIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/5 relative z-20">
            {/* Dots navigation indicators */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2.5 h-2.5 rounded-none transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-accent' : 'bg-white/15 hover:bg-white/30'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow controllers */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-2.5 bg-white/5 hover:bg-accent text-[#BDBDBD] hover:text-white border border-white/5 hover:border-transparent transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 bg-white/5 hover:bg-accent text-[#BDBDBD] hover:text-white border border-white/5 hover:border-transparent transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
