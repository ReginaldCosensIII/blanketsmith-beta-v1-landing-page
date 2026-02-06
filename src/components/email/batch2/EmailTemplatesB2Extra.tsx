import { EmailHeaderB2 } from "./EmailHeaderB2";
import { EmailFooterB2 } from "./EmailFooterB2";
import { EmailButtonB2 } from "./EmailButtonB2";

interface EmailTemplateProps {
  isDarkMode: boolean;
  isMobile?: boolean;
}

// --- Shared helpers (mirrored from EmailTemplatesB2.tsx) ---

function SectionLabel({ children }: { children: React.ReactNode }) {
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
          <td width="44px" valign="top" style={{ paddingRight: "16px" }}>
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
// TEMPLATE: Password Reset (Editorial)
// ========================================

export function PasswordResetEmailB2({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const warningColor = "#f59e0b";
  const warningBg = isDarkMode ? "rgba(245, 158, 11, 0.08)" : "rgba(245, 158, 11, 0.06)";

  return (
    <EmailShell isDarkMode={isDarkMode} isMobile={isMobile}>
      <SectionLabel>Security</SectionLabel>
      <SectionTitle isDarkMode={isDarkMode}>
        Reset your password.
      </SectionTitle>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        We received a request to reset the password for your BlanketSmith account.
        Click the button below to choose a new password.
      </p>

      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <EmailButtonB2 href="#">Reset Password</EmailButtonB2>
      </div>

      <Divider isDarkMode={isDarkMode} />

      {/* Warning card */}
      <div
        style={{
          backgroundColor: warningBg,
          border: `1px solid ${warningColor}30`,
          borderRadius: "10px",
          padding: isMobile ? "16px" : "20px",
          marginBottom: "16px",
        }}
      >
        <p
          style={{
            margin: "0 0 6px",
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Inter, system-ui, sans-serif",
            color: warningColor,
          }}
        >
          ⚠️ Security Notice
        </p>
        <p
          style={{
            margin: "0",
            fontSize: "13px",
            lineHeight: "1.55",
            fontFamily: "Inter, system-ui, sans-serif",
            color: mutedColor,
          }}
        >
          This link expires in 60 minutes. If you didn't request this, 
          you can safely ignore this email — your account remains secure.
        </p>
      </div>

      <p
        style={{
          margin: "0",
          fontSize: "13px",
          lineHeight: "1.6",
          color: mutedColor,
          textAlign: "center",
        }}
      >
        Need help? Contact{" "}
        <a href="mailto:support@blanketsmith.com" style={{ color: "#7C2AE8", textDecoration: "none" }}>
          support@blanketsmith.com
        </a>
      </p>
    </EmailShell>
  );
}

// ========================================
// TEMPLATE: First Pattern Achievement (Editorial)
// ========================================

export function FirstPatternEmailB2({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const achievementColor = "#f59e0b";
  const achievementBg = isDarkMode ? "rgba(245, 158, 11, 0.08)" : "rgba(245, 158, 11, 0.05)";

  return (
    <EmailShell isDarkMode={isDarkMode} isMobile={isMobile}>
      {/* Achievement pill */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: "100px",
            backgroundColor: `${achievementColor}18`,
            border: `1px solid ${achievementColor}40`,
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: "Inter, system-ui, sans-serif",
              color: achievementColor,
            }}
          >
            🏆 Milestone Unlocked
          </span>
        </div>
      </div>

      <SectionTitle isDarkMode={isDarkMode}>
        Your first pattern!
      </SectionTitle>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        Congratulations — you've just created your very first pattern in The Forge.
        Every masterpiece starts with a single stitch, and this is yours.
      </p>

      {/* Achievement card */}
      <div
        style={{
          backgroundColor: achievementBg,
          border: `1px solid ${achievementColor}30`,
          borderRadius: "10px",
          padding: isMobile ? "20px" : "24px",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        <p style={{ margin: "0 0 4px", fontSize: "11px", fontWeight: "600", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: achievementColor, fontFamily: "Inter, system-ui, sans-serif" }}>
          Achievement
        </p>
        <p style={{ margin: "0 0 4px", fontSize: "22px", fontWeight: "700", fontFamily: "Poppins, system-ui, sans-serif", color: textColor }}>
          First Pattern Created
        </p>
        <p style={{ margin: "0", fontSize: "13px", color: mutedColor, fontFamily: "Inter, system-ui, sans-serif" }}>
          Pattern #001 · Completed just now
        </p>
      </div>

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
        What's next
      </p>

      <NumberedStep
        number={1}
        title="Share Your Creation"
        description="Post your pattern to the community gallery and inspire other makers."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={2}
        title="Explore Templates"
        description="Browse community patterns and find inspiration for your next project."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={3}
        title="Refine & Iterate"
        description="Use the precision editor to perfect your pattern before production."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />

      <Divider isDarkMode={isDarkMode} />

      <div style={{ textAlign: "center" }}>
        <EmailButtonB2 href="#">View Your Pattern</EmailButtonB2>
      </div>
    </EmailShell>
  );
}

// ========================================
// TEMPLATE: Beta Credentials (Editorial)
// ========================================

export function BetaCredentialsEmailB2({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const codeBg = isDarkMode ? "#0a0f1a" : "#f1f5f9";
  const codeColor = isDarkMode ? "#0ec8fc" : "#7c2ae8";
  const borderColor = isDarkMode ? "#1e293b" : "#e2e8f0";

  return (
    <EmailShell isDarkMode={isDarkMode} isMobile={isMobile}>
      <SectionLabel>Beta Access</SectionLabel>
      <SectionTitle isDarkMode={isDarkMode}>
        Your credentials are ready.
      </SectionTitle>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        Your Beta access has been approved. Use the credentials below to log in
        to The Forge and start creating. Please keep this information secure.
      </p>

      {/* Credentials block */}
      <div
        style={{
          backgroundColor: codeBg,
          borderRadius: "10px",
          padding: isMobile ? "20px" : "24px",
          border: `1px solid ${borderColor}`,
          marginBottom: "24px",
        }}
      >
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td style={{ paddingBottom: "12px" }}>
                <p style={{ margin: "0 0 4px", fontSize: "11px", fontWeight: "600", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: mutedColor, fontFamily: "Inter, system-ui, sans-serif" }}>
                  Login URL
                </p>
                <p style={{ margin: "0", fontSize: "14px", fontWeight: "600", color: codeColor, fontFamily: "monospace" }}>
                  forge.blanketsmith.com
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: "12px", borderTop: `1px solid ${borderColor}`, paddingTop: "12px" }}>
                <p style={{ margin: "0 0 4px", fontSize: "11px", fontWeight: "600", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: mutedColor, fontFamily: "Inter, system-ui, sans-serif" }}>
                  Username
                </p>
                <p style={{ margin: "0", fontSize: "14px", fontWeight: "600", color: textColor, fontFamily: "monospace" }}>
                  your-email@example.com
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ borderTop: `1px solid ${borderColor}`, paddingTop: "12px" }}>
                <p style={{ margin: "0 0 4px", fontSize: "11px", fontWeight: "600", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: mutedColor, fontFamily: "Inter, system-ui, sans-serif" }}>
                  Temporary Password
                </p>
                <p style={{ margin: "0", fontSize: "14px", fontWeight: "600", color: codeColor, fontFamily: "monospace" }}>
                  ••••••••••••
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <EmailButtonB2 href="#">Log In to The Forge</EmailButtonB2>
      </div>

      <Divider isDarkMode={isDarkMode} />

      <InfoCard
        title="First login"
        description="You'll be prompted to set a new password on your first login. Your temporary credentials expire in 7 days."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <InfoCard
        title="Need help?"
        description="If you're having trouble logging in, reach out to support@blanketsmith.com and we'll get you sorted."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
    </EmailShell>
  );
}

// ========================================
// TEMPLATE: Beta Kick-Off (Editorial)
// ========================================

export function BetaKickOffEmailB2({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";

  return (
    <EmailShell isDarkMode={isDarkMode} isMobile={isMobile}>
      <SectionLabel>Launch Day</SectionLabel>
      <SectionTitle isDarkMode={isDarkMode}>
        The Beta is live.
      </SectionTitle>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        Today marks the official launch of the BlanketSmith Beta. You're among 
        the first makers to access The Forge — and we couldn't be more excited 
        to have you along for the ride.
      </p>

      <p
        style={{
          margin: "0 0 28px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        This is Day One. Everything you see is shaped by your feedback, and 
        every feature that follows will be informed by how you use the tools 
        we've built together.
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
        What's in the Beta
      </p>

      <NumberedStep
        number={1}
        title="Pattern Generator"
        description="Create precise, production-ready patterns from your measurements in seconds."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={2}
        title="Precision Editor"
        description="Fine-tune every stitch, seam, and measurement with professional-grade tools."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={3}
        title="Community Hub"
        description="Connect with makers, share patterns, and collaborate in Discord."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />
      <NumberedStep
        number={4}
        title="Feedback Channel"
        description="Shape the roadmap — every bug report and feature request makes The Forge better."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
      />

      <Divider isDarkMode={isDarkMode} />

      {/* Quote block */}
      <div
        style={{
          borderLeft: "3px solid #7C2AE8",
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
          "Explore freely, break things, tell us about it. That's how we build the best tools."
        </p>
      </div>

      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <EmailButtonB2 href="#">Enter The Forge</EmailButtonB2>
      </div>
      <div style={{ textAlign: "center" }}>
        <EmailButtonB2 href="#" variant="outline">Join Discord</EmailButtonB2>
      </div>
    </EmailShell>
  );
}
