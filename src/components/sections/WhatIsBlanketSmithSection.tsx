import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ToolMockup } from "@/components/ToolMockup";

export function WhatIsBlanketSmithSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
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

      </div>
    </section>
  );
}

