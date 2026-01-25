import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import betaUIScreenshot from "@/assets/beta-ui-screenshot.png";
import { MobileMockup } from "./MobileMockup";

export function ToolMockup() {
  const containerRef = useRef(null);
  
  // Simple scroll-based animation - no scroll lock, animates as section enters viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  // Browser animation: smooth entrance as section scrolls into view
  const browserRotateX = useTransform(scrollYProgress, [0, 0.6], [25, 0]);
  const browserRotateY = useTransform(scrollYProgress, [0, 0.6], [-10, 0]);
  const browserScale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1]);
  const browserOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const browserY = useTransform(scrollYProgress, [0, 0.6], [40, 0]);
  
  // Browser shadow
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  // Mobile mockup: fades in and slides up slightly after browser settles
  const mobileOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const mobileY = useTransform(scrollYProgress, [0.3, 0.7], [30, 0]);
  const mobileScale = useTransform(scrollYProgress, [0.3, 0.7], [0.95, 1]);

  return (
    <div 
      ref={containerRef}
      className="relative"
    >
      {/* Simple flex container - no sticky positioning needed */}
      <div className="flex flex-col items-center">
        {/* Browser Mockup Container */}
        <div className="max-w-5xl mx-auto w-full px-4 relative z-0">
          <div 
            className="w-full mx-auto"
            style={{ perspective: "1500px" }}
          >
            <motion.div
              style={{ 
                rotateX: browserRotateX, 
                rotateY: browserRotateY, 
                scale: browserScale,
                opacity: browserOpacity,
                y: browserY,
                transformStyle: "preserve-3d" 
              }}
            >
              {/* Static Shadow Layer */}
              <motion.div
                style={{ opacity: shadowOpacity }}
                className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-primary/20 to-accent/10 blur-3xl transform translate-y-8 scale-95"
              />
              
              {/* Browser Frame */}
              <div className="rounded-xl overflow-hidden border border-border bg-card relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)]">
                {/* Browser Top Bar */}
                <div className="bg-secondary/80 border-b border-border px-1 py-0.5 sm:px-3 sm:py-2 md:px-4 md:py-3 flex items-center gap-0.5 sm:gap-2 md:gap-3 relative z-10">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-[2px] sm:gap-1.5 md:gap-2">
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80" />
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/80" />
                  </div>
                  
                  {/* URL Bar */}
                  <div className="flex-1 max-w-md mx-auto">
                    <div className="bg-background/60 rounded px-1 py-[2px] sm:px-3 sm:py-1 md:px-4 md:py-1.5 text-[6px] sm:text-xs md:text-sm text-muted-foreground text-center border border-border/50">
                      app.blanketsmith.com
                    </div>
                  </div>
                  
                  {/* Spacer for symmetry */}
                  <div className="w-3 sm:w-10 md:w-14" />
                </div>

                {/* Screenshot */}
                <div className="relative bg-background">
                  <img 
                    src={betaUIScreenshot} 
                    alt="BlanketSmith Pattern Tool Interface" 
                    className="w-full h-auto block"
                  />
                  
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Mockup - positioned to overlap browser with higher z-index */}
        <motion.div 
          className="w-[120px] sm:w-[160px] lg:w-[200px] mx-auto relative z-20 -mt-16 sm:-mt-20 lg:-mt-24"
          style={{
            opacity: mobileOpacity,
            y: mobileY,
            scale: mobileScale,
          }}
        >
          <MobileMockup />
        </motion.div>
      </div>
    </div>
  );
}
