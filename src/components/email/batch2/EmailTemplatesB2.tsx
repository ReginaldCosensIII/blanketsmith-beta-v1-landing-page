import { EmailHeaderB2 } from "./EmailHeaderB2";
import { EmailFooterB2 } from "./EmailFooterB2";
import { EmailButtonB2 } from "./EmailButtonB2";
import { EmailProgressRail } from "../EmailProgressRail";

interface EmailTemplateProps {
  isDarkMode: boolean;
  isMobile?: boolean;
}

// --- Shared helpers ---

function SectionLabel({ children, isDarkMode }: { children: React.ReactNode; isDarkMode: boolean }) {
  return (
    <p
      style={{
        margin: "0 0 8px",
        fontSize: "11px",
        fontWeight: "600",
        fontFamily: "Inter, system-ui, sans-serif",
        textTransform: "uppercase" as const,
        letterSpacing: "0.1em",
        background: "linear-gradient(135deg, #7C2AE8 0%, #0EC8FC 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  isDarkMode,
}: {
  children: React.ReactNode;
  isDarkMode: boolean;
}) {
  const textColor = isDarkMode ? "#f1f5f9" : "#0f172a";
  return (
    <h1
      style={{
        margin: "0 0 24px",
        fontSize: "32px",
        fontWeight: "700",
        fontFamily: "Poppins, system-ui, sans-serif",
        color: textColor,
        lineHeight: "1.2",
      }}
    >
      {children}
    </h1>
  );
}

function Divider({ isDarkMode }: { isDarkMode: boolean }) {
  const color = isDarkMode ? "#1e293b" : "#e2e8f0";
  return (
    <div style={{ height: "1px", backgroundColor: color, margin: "28px 0" }} />
  );
}

function NumberedStep({
  number,
  title,
  description,
  isDarkMode,
  isMobile,
}: {
  number: number;
  title: string;
  description: string;
  isDarkMode: boolean;
  isMobile: boolean;
}) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const numBg = isDarkMode ? "#1e293b" : "#f1f5f9";

  return (
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "16px" }}>
      <tbody>
        <tr>
          <td
            width="44px"
            valign="top"
            style={{ paddingRight: "16px" }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                backgroundColor: numBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins, system-ui, sans-serif",
                fontWeight: "700",
                fontSize: "16px",
                color: "#7C2AE8",
              }}
            >
              {number}
            </div>
          </td>
          <td valign="top">
            <p
              style={{
                margin: "0 0 4px",
                fontSize: isMobile ? "14px" : "15px",
                fontWeight: "600",
                fontFamily: "Inter, system-ui, sans-serif",
                color: textColor,
              }}
            >
              {title}
            </p>
            <p
              style={{
                margin: "0",
                fontSize: isMobile ? "13px" : "14px",
                lineHeight: "1.6",
                fontFamily: "Inter, system-ui, sans-serif",
                color: mutedColor,
              }}
            >
              {description}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function InfoCard({
  title,
  description,
  isDarkMode,
  isMobile,
}: {
  title: string;
  description: string;
  isDarkMode: boolean;
  isMobile: boolean;
}) {
  const cardBg = isDarkMode ? "#1e293b" : "#f8fafc";
  const titleColor = isDarkMode ? "#f1f5f9" : "#0f172a";
  const textColor = isDarkMode ? "#94a3b8" : "#64748b";
  const borderColor = isDarkMode ? "#334155" : "#e2e8f0";

  return (
    <div
      style={{
        backgroundColor: cardBg,
        border: `1px solid ${borderColor}`,
        borderRadius: "10px",
        padding: isMobile ? "16px" : "20px",
        marginBottom: "12px",
      }}
    >
      <p
        style={{
          margin: "0 0 6px",
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "Inter, system-ui, sans-serif",
          color: titleColor,
        }}
      >
        {title}
      </p>
      <p
        style={{
          margin: "0",
          fontSize: "13px",
          lineHeight: "1.55",
          fontFamily: "Inter, system-ui, sans-serif",
          color: textColor,
        }}
      >
        {description}
      </p>
    </div>
  );
}

// --- Wrapper shell ---

function EmailShell({
  isDarkMode,
  isMobile,
  children,
}: {
  isDarkMode: boolean;
  isMobile: boolean;
  children: React.ReactNode;
}) {
  const bgColor = isDarkMode ? "#080c14" : "#f1f5f9";
  const cardBg = isDarkMode ? "#0f172a" : "#ffffff";

  return (
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{ backgroundColor: bgColor, fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <tbody>
        <tr>
          <td align="center" style={{ padding: isMobile ? "12px" : "24px" }}>
            <table
              width={isMobile ? "100%" : "600"}
              cellPadding="0"
              cellSpacing="0"
              style={{
                backgroundColor: cardBg,
                borderRadius: "12px",
                overflow: "hidden",
                maxWidth: "600px",
                boxShadow: isDarkMode
                  ? "0 20px 40px -12px rgba(0, 0, 0, 0.6)"
                  : "0 4px 24px -4px rgba(0, 0, 0, 0.08)",
              }}
            >
              <tbody>
                <tr>
                  <td>
                    <EmailHeaderB2 isDarkMode={isDarkMode} />
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: isMobile ? "28px 24px 32px" : "36px 44px 40px" }}>
                    {children}
                  </td>
                </tr>
                <tr>
                  <td>
                    <EmailFooterB2 isDarkMode={isDarkMode} />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

// ========================================
// TEMPLATE 1: Beta Welcome (Editorial)
// ========================================

export function BetaWelcomeEmailB2({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";

  return (
    <EmailShell isDarkMode={isDarkMode} isMobile={isMobile}>
      <SectionLabel isDarkMode={isDarkMode}>Beta Program</SectionLabel>
      <SectionTitle isDarkMode={isDarkMode}>
        Welcome to The Forge.
      </SectionTitle>

      <p
        style={{
          margin: "0 0 28px",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        You're in. BlanketSmith is currently in a limited Beta, and you've secured 
        a front-row seat to the future of pattern design. We're building something 
        special for makers who value precision, creativity, and a streamlined workflow.
      </p>

      {/* Progress Rail */}
      <EmailProgressRail currentStep={1} isDarkMode={isDarkMode} />

      <Divider isDarkMode={isDarkMode} />

      <p
        style={{
          margin: "0 0 8px",
          fontSize: "13px",
          fontWeight: "600",
          fontFamily: "Inter, system-ui, sans-serif",
          color: textColor,
          textTransform: "uppercase" as const,
          letterSpacing: "0.06em",
        }}
      >
        What you'll get access to
      </p>

      <NumberedStep
        number={1}
        title="Pattern Generator"
        description="Transform your vision into precise, production-ready patterns in seconds."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={2}
        title="Precision Editor"
        description="Fine-tune every stitch, measurement, and detail with professional-grade tools."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={3}
        title="Maker Community"
        description="Connect with fellow crafters, share patterns, and get inspiration."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />

      <Divider isDarkMode={isDarkMode} />

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.7",
          color: mutedColor,
        }}
      >
        Verify your email to continue your journey. Once verified, your Beta 
        credentials will arrive within 24–48 hours.
      </p>

      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <EmailButtonB2 href="#">Verify Email Address</EmailButtonB2>
      </div>
    </EmailShell>
  );
}

// ========================================
// TEMPLATE 2: Partnership (Editorial)
// ========================================

export function PartnershipEmailB2({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const quoteBorder = isDarkMode ? "#7C2AE8" : "#7C2AE8";

  return (
    <EmailShell isDarkMode={isDarkMode} isMobile={isMobile}>
      <SectionLabel isDarkMode={isDarkMode}>Partnership Inquiry</SectionLabel>
      <SectionTitle isDarkMode={isDarkMode}>
        Let's build together.
      </SectionTitle>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        Thank you for reaching out about a potential partnership. We sit at the 
        intersection of craftsmanship and modern software, and we're always excited 
        to explore collaborations that push boundaries.
      </p>

      <p
        style={{
          margin: "0 0 28px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        Our team has received your inquiry and will be reviewing it carefully. 
        We typically respond within 2–3 business days.
      </p>

      <Divider isDarkMode={isDarkMode} />

      {/* Quote block */}
      <div
        style={{
          borderLeft: `3px solid ${quoteBorder}`,
          paddingLeft: "20px",
          margin: "0 0 28px",
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: "1.6",
            fontFamily: "Poppins, system-ui, sans-serif",
            fontWeight: "600",
            fontStyle: "italic",
            color: textColor,
          }}
        >
          "The best tools are built by those who understand both the craft and the maker."
        </p>
      </div>

      <Divider isDarkMode={isDarkMode} />

      <InfoCard
        title="What we look for"
        description="We partner with brands, creators, and communities who share our passion for elevating the craft. Whether it's content, technology, or distribution — we're open to exploring."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <InfoCard
        title="Our commitment"
        description="Every partnership receives personal attention from our founding team. We believe in building genuine, long-term relationships."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <EmailButtonB2 href="#">Learn More About BlanketSmith</EmailButtonB2>
      </div>
    </EmailShell>
  );
}

// ========================================
// TEMPLATE 3: Feedback (Editorial)
// ========================================

export function FeedbackEmailB2({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const accentColor = isDarkMode ? "#0EC8FC" : "#7C2AE8";

  return (
    <EmailShell isDarkMode={isDarkMode} isMobile={isMobile}>
      <SectionLabel isDarkMode={isDarkMode}>Feedback Received</SectionLabel>
      <SectionTitle isDarkMode={isDarkMode}>
        Heard, noted, forging.
      </SectionTitle>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        Accuracy and craftsmanship matter deeply to us. Your input is exactly 
        how we evolve — and we want you to know that your feedback has been 
        received and will be carefully reviewed.
      </p>

      <p
        style={{
          margin: "0 0 28px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        Every suggestion, bug report, and feature request helps us build a 
        better tool for the entire maker community.
      </p>

      <Divider isDarkMode={isDarkMode} />

      <p
        style={{
          margin: "0 0 8px",
          fontSize: "13px",
          fontWeight: "600",
          fontFamily: "Inter, system-ui, sans-serif",
          color: textColor,
          textTransform: "uppercase" as const,
          letterSpacing: "0.06em",
        }}
      >
        What happens next
      </p>

      <NumberedStep
        number={1}
        title="Review"
        description="Our team reviews all feedback weekly and categorizes it for action."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={2}
        title="Prioritize"
        description="High-impact suggestions are fast-tracked to our development roadmap."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={3}
        title="Ship & Credit"
        description="When we ship features inspired by your input, we'll highlight them in our changelog."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />

      <Divider isDarkMode={isDarkMode} />

      <div style={{ textAlign: "center" }}>
        <EmailButtonB2 href="#">View Our Roadmap</EmailButtonB2>
      </div>
    </EmailShell>
  );
}

// ========================================
// TEMPLATE 4: Verification Success (Editorial)
// ========================================

export function VerificationSuccessEmailB2({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const successColor = "#22c55e";

  return (
    <EmailShell isDarkMode={isDarkMode} isMobile={isMobile}>
      {/* Success badge */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: "100px",
            backgroundColor: `${successColor}18`,
            border: `1px solid ${successColor}40`,
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: "Inter, system-ui, sans-serif",
              color: successColor,
            }}
          >
            ✓ Email Verified
          </span>
        </div>
      </div>

      <SectionTitle isDarkMode={isDarkMode}>
        You're in. Let's go.
      </SectionTitle>

      {/* Progress Rail - All steps complete */}
      <EmailProgressRail currentStep={3} isDarkMode={isDarkMode} />

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        Your email has been verified and your Beta access is now active. 
        Welcome to The Forge — you're officially part of the BlanketSmith community.
      </p>

      <Divider isDarkMode={isDarkMode} />

      <p
        style={{
          margin: "0 0 8px",
          fontSize: "13px",
          fontWeight: "600",
          fontFamily: "Inter, system-ui, sans-serif",
          color: textColor,
          textTransform: "uppercase" as const,
          letterSpacing: "0.06em",
        }}
      >
        Getting started
      </p>

      <NumberedStep
        number={1}
        title="Explore the Pattern Generator"
        description="Jump in and create your first pattern — it only takes a few clicks."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={2}
        title="Set Up Your Workspace"
        description="Customize your preferences, units, and default settings."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={3}
        title="Join the Community"
        description="Connect with fellow makers on Discord and share your creations."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />

      <Divider isDarkMode={isDarkMode} />

      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <EmailButtonB2 href="#">Enter The Forge</EmailButtonB2>
      </div>
      <div style={{ textAlign: "center" }}>
        <EmailButtonB2 href="#" variant="outline">Join Discord</EmailButtonB2>
      </div>
    </EmailShell>
  );
}
