import { useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Copy, Check, Monitor, Smartphone, Moon, Sun, Camera } from "lucide-react";
import { toPng } from "html-to-image";
import { toast } from "sonner";
import {
  BetaWelcomeEmail,
  PartnershipEmail,
  FeedbackEmail,
  VerificationSuccessEmail,
} from "@/components/email/EmailTemplates";
import {
  PasswordResetEmail,
  FirstPatternEmail,
  BetaCredentialsEmail,
  BetaKickOffEmail,
} from "@/components/email/EmailTemplatesExtra";
import {
  BetaWelcomeEmailB2,
  PartnershipEmailB2,
  FeedbackEmailB2,
  VerificationSuccessEmailB2,
} from "@/components/email/batch2/EmailTemplatesB2";
import {
  PasswordResetEmailB2,
  FirstPatternEmailB2,
  BetaCredentialsEmailB2,
  BetaKickOffEmailB2,
} from "@/components/email/batch2/EmailTemplatesB2Extra";

type EmailTemplate =
  | "beta-welcome"
  | "partnership"
  | "feedback"
  | "verification-success"
  | "password-reset"
  | "first-pattern"
  | "beta-credentials"
  | "beta-kickoff";

type ViewportSize = "mobile" | "desktop";
type DesignBatch = "cinematic" | "editorial";

const templateLabels: Record<EmailTemplate, string> = {
  "beta-welcome": "Beta Welcome",
  partnership: "Partnership",
  feedback: "Feedback",
  "verification-success": "Verified",
  "password-reset": "Password Reset",
  "first-pattern": "First Pattern",
  "beta-credentials": "Beta Creds",
  "beta-kickoff": "Beta Kick-Off",
};

export default function EmailForge() {
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate>("beta-welcome");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [viewportSize, setViewportSize] = useState<ViewportSize>("desktop");
  const [designBatch, setDesignBatch] = useState<DesignBatch>("cinematic");
  const [copied, setCopied] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const [screenshotting, setScreenshotting] = useState(false);

  const handleCopyHTML = async () => {
    if (!previewRef.current) return;

    const htmlContent = previewRef.current.innerHTML;
    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>BlanketSmith Email</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
${htmlContent}
</body>
</html>`;

    try {
      await navigator.clipboard.writeText(fullHTML);
      setCopied(true);
      toast.success("HTML copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy HTML");
    }
  };

  const handleScreenshot = async () => {
    if (!previewRef.current || screenshotting) return;
    setScreenshotting(true);

    const el = previewRef.current;
    // Remove scroll constraints so full email is exposed
    const prevMaxHeight = el.style.maxHeight;
    const prevOverflow = el.style.overflow;
    el.style.maxHeight = "none";
    el.style.overflow = "visible";

    // Wait for layout repaint
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    try {
      const dataUrl = await toPng(el, {
        quality: 1,
        pixelRatio: 2,
        cacheBust: true,
        height: el.scrollHeight,
        width: el.scrollWidth,
      });
      const link = document.createElement("a");
      link.download = `blanketsmith-${selectedTemplate}-${designBatch}-${isDarkMode ? "dark" : "light"}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("Screenshot saved!");
    } catch (err) {
      toast.error("Failed to capture screenshot");
    } finally {
      // Restore constraints
      el.style.maxHeight = prevMaxHeight;
      el.style.overflow = prevOverflow;
      setScreenshotting(false);
    }
  };

  const isMobile = viewportSize === "mobile";

  const renderTemplate = () => {
    if (designBatch === "editorial") {
      switch (selectedTemplate) {
        case "beta-welcome":
          return <BetaWelcomeEmailB2 isDarkMode={isDarkMode} isMobile={isMobile} />;
        case "partnership":
          return <PartnershipEmailB2 isDarkMode={isDarkMode} isMobile={isMobile} />;
        case "feedback":
          return <FeedbackEmailB2 isDarkMode={isDarkMode} isMobile={isMobile} />;
        case "verification-success":
          return <VerificationSuccessEmailB2 isDarkMode={isDarkMode} isMobile={isMobile} />;
        case "password-reset":
          return <PasswordResetEmailB2 isDarkMode={isDarkMode} isMobile={isMobile} />;
        case "first-pattern":
          return <FirstPatternEmailB2 isDarkMode={isDarkMode} isMobile={isMobile} />;
        case "beta-credentials":
          return <BetaCredentialsEmailB2 isDarkMode={isDarkMode} isMobile={isMobile} />;
        case "beta-kickoff":
          return <BetaKickOffEmailB2 isDarkMode={isDarkMode} isMobile={isMobile} />;
      }
    }
    switch (selectedTemplate) {
      case "beta-welcome":
        return <BetaWelcomeEmail isDarkMode={isDarkMode} isMobile={isMobile} />;
      case "partnership":
        return <PartnershipEmail isDarkMode={isDarkMode} isMobile={isMobile} />;
      case "feedback":
        return <FeedbackEmail isDarkMode={isDarkMode} isMobile={isMobile} />;
      case "verification-success":
        return <VerificationSuccessEmail isDarkMode={isDarkMode} isMobile={isMobile} />;
      case "password-reset":
        return <PasswordResetEmail isDarkMode={isDarkMode} isMobile={isMobile} />;
      case "first-pattern":
        return <FirstPatternEmail isDarkMode={isDarkMode} isMobile={isMobile} />;
      case "beta-credentials":
        return <BetaCredentialsEmail isDarkMode={isDarkMode} isMobile={isMobile} />;
      case "beta-kickoff":
        return <BetaKickOffEmail isDarkMode={isDarkMode} isMobile={isMobile} />;
    }
  };

  const batchLabel = designBatch === "cinematic" ? "Cinematic" : "Editorial";

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Header */}
        <section className="relative overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] opacity-20 blur-3xl rounded-full gradient-bg transform translate-x-[30%] -translate-y-[30%]" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] opacity-20 blur-3xl rounded-full accent-orb transform -translate-x-[30%] translate-y-[30%]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(var(--muted-foreground)) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(var(--muted-foreground)) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Email{" "}
              <span className="gradient-text">Forge</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Craft beautiful, brand-aligned email templates. Preview in light or dark mode,
              then export table-based HTML with fully inlined CSS.
            </p>
          </div>
        </section>

        {/* Controls & Preview Area */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Control Bar */}
            <div className="glass rounded-xl p-4 mb-6 flex flex-col gap-4">
              {/* Top row: batch toggle + viewport/theme controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
                  <button
                    onClick={() => setDesignBatch("cinematic")}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      designBatch === "cinematic"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Cinematic
                  </button>
                  <button
                    onClick={() => setDesignBatch("editorial")}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      designBatch === "editorial"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Editorial
                  </button>
                </div>

                {/* Viewport & Theme Controls */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewportSize("mobile")}
                      className={`p-2 rounded-lg transition-colors ${
                        viewportSize === "mobile"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewportSize("desktop")}
                      className={`p-2 rounded-lg transition-colors ${
                        viewportSize === "desktop"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Monitor className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-muted-foreground" />
                    <Switch
                      id="dark-mode"
                      checked={isDarkMode}
                      onCheckedChange={setIsDarkMode}
                    />
                    <Moon className="w-4 h-4 text-muted-foreground" />
                    <Label htmlFor="dark-mode" className="text-sm text-muted-foreground sr-only">
                      Dark Mode
                    </Label>
                  </div>

                  <Button
                    variant="secondary"
                    onClick={handleScreenshot}
                    disabled={screenshotting}
                    className="min-w-[120px]"
                  >
                    <Camera className="w-4 h-4" />
                    {screenshotting ? "Capturing…" : "Screenshot"}
                  </Button>
                  <Button
                    variant="gradient"
                    onClick={handleCopyHTML}
                    className="min-w-[140px]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy HTML
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Template selector row */}
              <div className="flex flex-wrap gap-2">
                {(Object.entries(templateLabels) as [EmailTemplate, string][]).map(
                  ([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTemplate(key)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        selectedTemplate === key
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Preview Window */}
            <div
              className={`mx-auto transition-all duration-300 ${
                viewportSize === "mobile" ? "max-w-[375px]" : "max-w-[600px]"
              }`}
            >
              <div className="glass rounded-xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="bg-secondary/30 border-b border-border px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-secondary/50 rounded-md px-4 py-1 text-xs text-muted-foreground">
                      preview.blanketsmith.email
                    </div>
                  </div>
                </div>

                {/* Email Preview */}
                <div
                  ref={previewRef}
                  className="overflow-auto"
                  style={{ maxHeight: screenshotting ? "none" : "70vh" }}
                >
                  {renderTemplate()}
                </div>
              </div>
            </div>

            {/* Template Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Viewing:{" "}
                <span className="font-medium text-foreground">
                  {templateLabels[selectedTemplate]}
                </span>{" "}
                · {batchLabel} · {isDarkMode ? "Dark" : "Light"} Mode ·{" "}
                {viewportSize === "mobile" ? "375px" : "600px"} Width
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
