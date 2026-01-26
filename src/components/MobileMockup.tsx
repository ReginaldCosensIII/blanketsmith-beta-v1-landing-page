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
          
          {/* Screen Content - uses a light gray background to match the screenshot's UI */}
          <div className="bg-[#f5f5f5] relative overflow-hidden w-full">
            {/* Aspect ratio wrapper - 9:19 for standard mobile proportions */}
            <div className="relative w-full flex flex-col items-center justify-start" style={{ aspectRatio: "9/19" }}>
              
              {/* Screenshot image - full width, natural height, prioritizing header visibility */}
              <img 
                src={mobileScreenshot} 
                alt="BlanketSmith mobile app interface"
                className="w-full h-auto object-contain object-top"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
