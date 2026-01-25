import { Smartphone, Sparkles } from "lucide-react";

export function MobileMockup() {
  return (
    <div 
      className="relative w-full"
      style={{ perspective: "1200px" }}
    >
      <div className="relative w-full">
        {/* Static shadow for depth */}
        <div className="absolute inset-0 -z-10 rounded-[2rem] sm:rounded-[2.5rem] bg-foreground/30 blur-2xl transform translate-y-4 scale-95" />
        
        {/* Ambient glow - brand color accent */}
        <div className="absolute inset-0 -z-20 rounded-[2rem] sm:rounded-[2.5rem] bg-primary/20 blur-3xl transform translate-y-10 scale-125" />
        
        {/* Phone Frame */}
        <div className="w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border-[4px] sm:border-[5px] border-foreground/90 bg-foreground/90 relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_12px_24px_-8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]">
          {/* Phone Notch/Dynamic Island */}
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1.5 sm:h-2 bg-foreground/90 rounded-full z-20" />
          
          {/* Screen Content */}
          <div className="bg-background relative overflow-hidden w-full">
            {/* Aspect ratio wrapper for mobile (9:19.5) */}
            <div className="relative w-full" style={{ aspectRatio: "9/19.5" }}>
              {/* Gradient Background */}
              <div className="absolute inset-0 gradient-bg opacity-10" />
              
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, hsl(var(--muted-foreground)) 1px, transparent 1px),
                    linear-gradient(to bottom, hsl(var(--muted-foreground)) 1px, transparent 1px)
                  `,
                  backgroundSize: "16px 16px",
                }}
              />
              
              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4">
                {/* Icon Container */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-bg flex items-center justify-center mb-2 shadow-lg">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-xs sm:text-sm font-display font-bold text-foreground mb-0.5 text-center">
                  Mobile App
                </h3>
                
                {/* Subtitle */}
                <p className="text-[8px] sm:text-[10px] text-muted-foreground text-center max-w-[100px] mb-2">
                  Create patterns anywhere, anytime
                </p>
                
                {/* Coming Soon Badge */}
                <div className="inline-flex items-center gap-0.5 px-2 py-1 rounded-full bg-brand-midblue/10 border border-brand-purple/30">
                  <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-brand-midblue" />
                  <span className="text-[7px] sm:text-[9px] font-medium text-brand-midblue">Coming Soon</span>
                </div>
              </div>
              
              {/* Top gradient overlay */}
              <div className="absolute inset-x-0 top-0 h-6 sm:h-8 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
              
              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-card/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Phone Bottom Bar Indicator */}
        <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-0.5 sm:h-1 bg-background/60 rounded-full" />
      </div>
    </div>
  );
}
