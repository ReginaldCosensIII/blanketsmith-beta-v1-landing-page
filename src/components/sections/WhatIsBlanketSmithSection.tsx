import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ToolMockup } from "@/components/ToolMockup";
import {
  Grid3X3,
  Palette,
  Layers,
  Download,
  Eye,
  Repeat,
} from "lucide-react";

const capabilities = [
  {
    icon: Grid3X3,
    label: "Precision Grid System",
    description: "Pixel-perfect stitch grids that match your gauge",
  },
  {
    icon: Palette,
    label: "Color Palette Builder",
    description: "Build palettes from yarn brands or custom colors",
  },
  {
    icon: Layers,
    label: "Multi-Layer Patterns",
    description: "Stack pattern elements for complex designs",
  },
  {
    icon: Download,
    label: "Export Ready",
    description: "PDF, PNG, and printable format outputs",
  },
  {
    icon: Eye,
    label: "Live Preview",
    description: "See changes instantly as you design",
  },
  {
    icon: Repeat,
    label: "Pattern Repeat",
    description: "Auto-tile and repeat pattern motifs seamlessly",
  },
];

export function WhatIsBlanketSmithSection() {
  const sectionRef = useRef(null);
  const calloutRef = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: calloutProgress } = useScroll({
    target: calloutRef,
    offset: ["start end", "center center"],
  });

  // Parallax background shifts
  const bgY = useTransform(sectionProgress, [0, 1], ["0%", "8%"]);
  const orbX1 = useTransform(sectionProgress, [0, 1], ["-15%", "15%"]);
  const orbX2 = useTransform(sectionProgress, [0, 1], ["15%", "-15%"]);
  const gridOpacity = useTransform(
    sectionProgress,
    [0, 0.2, 0.8, 1],
    [0.01, 0.04, 0.04, 0.01]
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden"
    >
      {/* Parallax Background Layer */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        {/* Dot grid pattern */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: gridOpacity,
            backgroundImage: `radial-gradient(circle, hsl(var(--brand-midblue)) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Moving gradient orbs */}
        <motion.div
          className="absolute top-[10%] -left-32 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full opacity-[0.06] blur-3xl gradient-bg"
          style={{ x: orbX1 }}
        />
        <motion.div
          className="absolute bottom-[15%] -right-32 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full opacity-[0.06] blur-3xl gradient-bg"
          style={{ x: orbX2 }}
        />

        {/* Subtle diagonal accent lines */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              135deg,
              transparent,
              transparent 80px,
              hsl(var(--brand-cyan)) 80px,
              hsl(var(--brand-cyan)) 81px
            )`,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            What is BlanketSmith?
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-6">
            BlanketSmith is a browser-based pattern generation tool built
            specifically for crocheters and knitters. Whether you're designing
            your first granny square or perfecting an intricate colorwork
            blanket, our tool transforms your creative vision into precise,
            ready-to-follow patterns.
          </p>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            No more hand-drawing grids or wrestling with spreadsheets.
            BlanketSmith brings pattern creation into the modern era—with an
            intuitive interface, instant previews, and export options that work
            for your workflow.
          </p>
        </div>

        {/* Tool Mockup */}
        <div className="mt-12 md:mt-16">
          <ToolMockup />
        </div>

        {/* Capability Callouts - scroll-animated grid */}
        <div ref={calloutRef} className="mt-8 md:mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {capabilities.map((cap, index) => (
              <CapabilityCard
                key={cap.label}
                icon={cap.icon}
                label={cap.label}
                description={cap.description}
                progress={calloutProgress}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  icon: Icon,
  label,
  description,
  progress,
  index,
}: {
  icon: React.ElementType;
  label: string;
  description: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
}) {
  const start = index * 0.07;
  const end = Math.min(start + 0.35, 1);
  const isLeft = index % 2 === 0;

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [30, 0]);
  const x = useTransform(progress, [start, end], [isLeft ? -20 : 20, 0]);

  return (
    <motion.div
      style={{ opacity, y, x }}
      className="p-3 md:p-4 lg:p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-brand-midblue/30 transition-colors duration-300 group"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-brand-midblue/10 border border-brand-purple/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(92,174,255,0.3)] transition-all duration-300">
          <Icon
            className="w-4 h-4 md:w-5 md:h-5 text-brand-midblue"
            strokeWidth={1.5}
          />
        </div>
        <div className="min-w-0">
          <h4 className="font-display text-sm md:text-base font-semibold text-foreground leading-tight">
            {label}
          </h4>
          <p className="font-sans text-xs md:text-sm text-muted-foreground mt-0.5 leading-relaxed hidden sm:block">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
