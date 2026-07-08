import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { transformationsData } from '../data/gymData';

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    // Lock scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    // Unlock scrolling
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % transformationsData.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + transformationsData.length) % transformationsData.length);
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-24 sm:py-32 bg-[#0E0E0E] text-white relative border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-xs font-mono uppercase tracking-widest block mb-3"
          >
            Hall of Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-heading tracking-tight"
          >
            TRANSFORMATION <span className="text-accent">GALLERY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#BDBDBD] text-sm sm:text-base font-light leading-relaxed mt-4"
          >
            Real results from real members. Explore the visual testaments of dedicated, guided athletic progression inside Tranzpire Gym.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformationsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#161616] border border-white/5 overflow-hidden flex flex-col hover:border-accent/30 transition-all duration-300 relative group"
            >
              {/* Image Split Container */}
              <div 
                onClick={() => openLightbox(idx)}
                className="relative aspect-square grid grid-cols-2 gap-[1px] bg-black overflow-hidden cursor-zoom-in"
              >
                {/* Before Image */}
                <div className="relative h-full overflow-hidden">
                  <img 
                    src={item.beforeImage} 
                    alt={`${item.name} Before`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[9px] uppercase tracking-widest font-mono font-bold text-red-500 border border-red-500/25">
                    Before
                  </div>
                </div>

                {/* After Image */}
                <div className="relative h-full overflow-hidden">
                  <img 
                    src={item.afterImage} 
                    alt={`${item.name} After`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#FF6B00]/95 px-2.5 py-1 text-[9px] uppercase tracking-widest font-mono font-bold text-white shadow-lg">
                    After
                  </div>
                </div>

                {/* Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                  <div className="bg-accent text-white p-3 rounded-none shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Text / Details Section */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-xl tracking-wider text-white">
                      {item.name}
                    </h3>
                    <span className="text-xs font-mono uppercase bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-accent font-semibold">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-[#BDBDBD] text-xs font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
            id="lightbox-container"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-accent p-2 bg-white/5 border border-white/10 hover:border-accent/40 rounded-none cursor-pointer z-55 transition-all"
              id="close-lightbox"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 text-white hover:text-accent p-3 bg-white/5 border border-white/10 rounded-none cursor-pointer z-55 transition-all"
              id="prev-lightbox"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#161616] border border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Large side-by-side comparison image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-black">
                <div className="relative aspect-square md:aspect-auto md:h-[500px]">
                  <img 
                    src={transformationsData[activeImageIndex].beforeImage} 
                    alt="Before comparison" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 px-3 py-1.5 text-xs uppercase tracking-widest font-mono font-bold text-red-500 border border-red-500/25">
                    Before Joining
                  </div>
                </div>
                <div className="relative aspect-square md:aspect-auto md:h-[500px]">
                  <img 
                    src={transformationsData[activeImageIndex].afterImage} 
                    alt="After comparison" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-[#FF6B00]/95 px-3 py-1.5 text-xs uppercase tracking-widest font-mono font-bold text-white shadow-lg">
                    After Tranzpire Gym
                  </div>
                </div>
              </div>

              {/* Text description overlay */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <h3 className="font-heading text-2xl sm:text-3xl tracking-wider text-white">
                      {transformationsData[activeImageIndex].name}'s Success Story
                    </h3>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-mono uppercase bg-accent/10 border border-accent/20 px-3 py-1 text-accent font-semibold">
                    Duration: {transformationsData[activeImageIndex].duration}
                  </span>
                </div>
                <p className="text-sm text-[#BDBDBD] font-light leading-relaxed">
                  {transformationsData[activeImageIndex].description}
                </p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 text-white hover:text-accent p-3 bg-white/5 border border-white/10 rounded-none cursor-pointer z-55 transition-all"
              id="next-lightbox"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
