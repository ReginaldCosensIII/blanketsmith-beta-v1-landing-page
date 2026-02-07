import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Grid3X3,
  Palette,
  Eye,
  Download,
  Layers,
  Repeat,
} from "lucide-react";
import betaUIScreenshot from "@/assets/beta-ui-screenshot.png";
import { MobileMockup } from "./MobileMockup";

const leftFeatures = [
  { icon: Grid3X3, label: "Precision Grids", desc: "Pixel-perfect stitch grids that match your gauge exactly" },
  { icon: Palette, label: "Color Palettes", desc: "Build palettes from yarn brands or custom hex colors" },
  { icon: Layers, label: "Multi-Layer Patterns", desc: "Stack elements for complex colorwork designs" },
];

const rightFeatures = [
  { icon: Eye, label: "Live Preview", desc: "See your blanket come to life as you design each row" },
  { icon: Download, label: "Export Ready", desc: "Download as PDF, PNG, or printable chart formats" },
  { icon: Repeat, label: "Pattern Repeat", desc: "Auto-tile motifs seamlessly across your project" },
];

export function ToolMockup() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };

  // === PHASE 1: Browser Entrance (0% - 35% scroll) ===
  const browserRotateX = useTransform(scrollYProgress, [0, 0.35], [30, 0]);
  const browserRotateY = useTransform(scrollYProgress, [0, 0.35], [-15, 0]);
  const browserScale = useTransform(scrollYProgress, [0, 0.35], [0.85, 1]);
  const browserOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const browserY = useTransform(scrollYProgress, [0, 0.35], [60, 0]);
  
  const browserShadowOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0.2, 1]);
  const browserShadowScale = useTransform(scrollYProgress, [0, 0.35], [0.88, 0.95]);
  const browserShadowRotate = useTransform(scrollYProgress, [0, 0.35], [-2, 0]);
  
  // === PHASE 2: Mobile Entrance (40% - 70% scroll) ===
  const mobileOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const mobileYRaw = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const mobileScaleRaw = useTransform(scrollYProgress, [0.4, 0.7], [0.85, 1]);
  const mobileRotateXRaw = useTransform(scrollYProgress, [0.4, 0.7], [12, 0]);
  
  const mobileY = useSpring(mobileYRaw, springConfig);
  const mobileScale = useSpring(mobileScaleRaw, springConfig);
  const mobileRotateX = useSpring(mobileRotateXRaw, springConfig);
  
  // === PHASE 3: Convergence & Depth (55% - 80% scroll) ===
  const mobileZRaw = useTransform(scrollYProgress, [0.55, 0.75], [0, 50]);
  const mobileZ = useSpring(mobileZRaw, springConfig);
  const mobileShadowIntensity = useTransform(scrollYProgress, [0.5, 0.8], [0.2, 1]);
  const mobileShadowScale = useTransform(scrollYProgress, [0.4, 0.8], [0.85, 0.92]);
  const mobileShadowRotate = useTransform(scrollYProgress, [0.4, 0.8], [3, 0]);

  // === PHASE 4: Flanking Feature Text (60% - 90% scroll) ===
  const featureOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const leftXRaw = useTransform(scrollYProgress, [0.6, 0.8], [-60, 0]);
  const rightXRaw = useTransform(scrollYProgress, [0.6, 0.8], [60, 0]);
  const leftX = useSpring(leftXRaw, springConfig);
  const rightX = useSpring(rightXRaw, springConfig);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[140vh] md:min-h-[180vh] lg:min-h-[190vh]"
    >
      {/* Sticky container */}
      <div className="sticky top-[8vh] md:top-[10vh] flex flex-col items-center relative">

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
              {/* Dynamic Shadow Layer */}
              <motion.div
                style={{ 
                  opacity: browserShadowOpacity,
                  scale: browserShadowScale,
                  rotateZ: browserShadowRotate,
                }}
                className="absolute inset-0 -z-10 rounded-xl bg-foreground/70 blur-2xl translate-y-8"
              />
              
              {/* Browser Frame */}
              <div className="rounded-xl overflow-hidden border border-border bg-card relative">
                {/* Browser Top Bar */}
                <div className="bg-secondary/80 border-b border-border px-1 py-0.5 sm:px-3 sm:py-2 md:px-4 md:py-3 flex items-center gap-0.5 sm:gap-2 md:gap-3 relative z-10">
                  <div className="flex items-center gap-[2px] sm:gap-1.5 md:gap-2">
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80" />
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-1 h-1 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 max-w-md mx-auto">
                    <div className="bg-background/60 rounded px-1 py-[2px] sm:px-3 sm:py-1 md:px-4 md:py-1.5 text-[6px] sm:text-xs md:text-sm text-muted-foreground text-center border border-border/50">
                      app.blanketsmith.com
                    </div>
                  </div>
                  <div className="w-3 sm:w-10 md:w-14" />
                </div>

                {/* Screenshot */}
                <div className="relative bg-background">
                  <img 
                    src={betaUIScreenshot} 
                    alt="BlanketSmith Pattern Tool Interface" 
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile + Flanking Features Layout */}
        <div className="w-full max-w-5xl mx-auto px-4 relative z-20 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24">
          <div className="flex items-start justify-center gap-4 md:gap-6 lg:gap-10">
            
            {/* Left Feature Column — md+ only */}
            <motion.div 
              className="hidden md:flex flex-col gap-4 lg:gap-5 flex-1 max-w-[260px] pt-8 lg:pt-12"
              style={{ opacity: featureOpacity, x: leftX }}
            >
              {leftFeatures.map((f, i) => (
                <FeatureBlurb key={f.label} icon={f.icon} label={f.label} desc={f.desc} index={i} />
              ))}
            </motion.div>

            {/* Mobile Mockup - center */}
            <motion.div 
              className="w-[100px] sm:w-[140px] md:w-[160px] lg:w-[200px] shrink-0"
              style={{
                opacity: mobileOpacity,
                y: mobileY,
                scale: mobileScale,
                rotateX: mobileRotateX,
                z: mobileZ,
                transformStyle: "preserve-3d",
                perspective: "1200px",
              }}
            >
              <motion.div 
                className="absolute inset-0 -z-10 rounded-[2rem] bg-foreground/50 blur-2xl"
                style={{
                  opacity: mobileShadowIntensity,
                  scale: mobileShadowScale,
                  rotateZ: mobileShadowRotate,
                  y: 20,
                }}
              />
              <MobileMockup />
            </motion.div>

            {/* Right Feature Column — md+ only */}
            <motion.div 
              className="hidden md:flex flex-col gap-4 lg:gap-5 flex-1 max-w-[260px] pt-8 lg:pt-12"
              style={{ opacity: featureOpacity, x: rightX }}
            >
              {rightFeatures.map((f, i) => (
                <FeatureBlurb key={f.label} icon={f.icon} label={f.label} desc={f.desc} index={i} />
              ))}
            </motion.div>
          </div>

          {/* Mobile Feature Strip — below mockup on small screens */}
          <motion.div 
            className="md:hidden mt-6 grid grid-cols-2 gap-3"
            style={{ opacity: featureOpacity }}
          >
            {[...leftFeatures, ...rightFeatures].map((f, i) => (
              <FeatureBlurb key={f.label} icon={f.icon} label={f.label} desc={f.desc} index={i} compact />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureBlurb({ 
  icon: Icon, 
  label, 
  desc, 
  index, 
  compact = false 
}: { 
  icon: React.ElementType; 
  label: string; 
  desc: string; 
  index: number; 
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className={compact ? "flex items-start gap-2" : "flex items-start gap-3"}
    >
      <div className={`${compact ? "w-7 h-7" : "w-8 h-8 lg:w-9 lg:h-9"} rounded-lg bg-brand-midblue/10 border border-brand-purple/20 flex items-center justify-center shrink-0`}>
        <Icon className={`${compact ? "w-3.5 h-3.5" : "w-4 h-4"} text-brand-midblue`} strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <h4 className={`font-display ${compact ? "text-xs" : "text-sm lg:text-base"} font-semibold text-foreground leading-tight`}>
          {label}
        </h4>
        <p className={`font-sans ${compact ? "text-[10px] leading-snug" : "text-xs lg:text-sm leading-relaxed"} text-muted-foreground mt-0.5`}>
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
