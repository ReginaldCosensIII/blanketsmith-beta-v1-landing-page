import { motion } from "framer-motion";

interface PageDecorImageProps {
  src: string;
  alt: string;
}

export function PageDecorImage({ src, alt }: PageDecorImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      className="absolute left-4 sm:left-8 lg:left-12 top-4 sm:top-8 lg:top-12 z-10 hidden md:block"
      aria-hidden="true"
    >
      <div className="relative">
        {/* Decorative gradient ring */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-purple via-brand-midblue to-brand-cyan opacity-60 blur-sm" />
        
        {/* Image container */}
        <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-lg border border-border/30">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Subtle overlay for blend */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-cyan/10" />
        </div>
        
        {/* Floating accent dots */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-br from-brand-cyan to-brand-midblue shadow-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="absolute -top-1 -right-3 w-2.5 h-2.5 rounded-full bg-brand-purple/80"
        />
      </div>
    </motion.div>
  );
}
