import mobileScreenshot from "@/assets/mobile-ui-screenshot.png";

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
          
          {/* Screen Content */}
          <div className="bg-background relative overflow-hidden w-full">
            {/* Aspect ratio wrapper matching the screenshot's natural proportions */}
            <div className="relative w-full bg-background" style={{ aspectRatio: "9/20" }}>
              
              {/* Screenshot image - full display with contain to show everything */}
              <img 
                src={mobileScreenshot} 
                alt="BlanketSmith mobile app interface"
                className="w-full h-full object-contain object-top"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
