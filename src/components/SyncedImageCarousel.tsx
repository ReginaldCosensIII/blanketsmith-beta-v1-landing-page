import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Import all three decorative images
import pageDecorContact from "@/assets/page-decor-contact.jpg";
import pageDecorFeedback from "@/assets/page-decor-feedback.jpg";
import pageDecorPartnerships from "@/assets/page-decor-partnerships.jpg";

export const carouselImages = [
  { src: pageDecorContact, alt: "Hands working together on a colorful blanket" },
  { src: pageDecorFeedback, alt: "Cozy crafting workspace with yarn and coffee" },
  { src: pageDecorPartnerships, alt: "Partners collaborating over yarn samples" },
];

interface SyncedImageCarouselProps {
  activeIndex: number;
  onIndexChange: (index: number) => void;
  className?: string;
}

export function SyncedImageCarousel({ 
  activeIndex, 
  onIndexChange,
  className 
}: SyncedImageCarouselProps) {
  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-border/50">
        {/* Gradient overlay for polish */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-cyan/5 z-10 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={carouselImages[activeIndex].src}
            alt={carouselImages[activeIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </AnimatePresence>

        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* Selector Dots */}
      <div className="flex items-center justify-center gap-3 mt-5">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onIndexChange(index)}
            className="group relative p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-full"
            aria-label={`Select image ${index + 1}`}
          >
            {/* Background glow on active */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-purple via-brand-midblue to-brand-cyan"
              initial={false}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1.3 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ filter: "blur(4px)" }}
            />
            
            {/* Dot */}
            <motion.div
              className={cn(
                "relative w-2.5 h-2.5 rounded-full transition-colors duration-300",
                activeIndex === index 
                  ? "bg-gradient-to-r from-brand-purple via-brand-midblue to-brand-cyan" 
                  : "bg-muted-foreground/40 group-hover:bg-muted-foreground/60"
              )}
              initial={false}
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
