'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export interface ImageSliderProps {
  images: string[];
  altPrefix?: string;
}

export function ImageSlider({
  images,
  altPrefix = 'Destination gallery image',
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-stone-200 border border-[var(--color-border)] shadow-sm">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`${altPrefix} (${currentIndex + 1} of ${images.length})`}
          referrerPolicy="no-referrer"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.35,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[var(--color-foreground)] shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 motion-reduce:active:scale-100 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[var(--color-foreground)] shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 motion-reduce:active:scale-100 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentIndex
                    ? 'w-6 bg-[var(--color-accent)]'
                    : 'w-2.5 bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
