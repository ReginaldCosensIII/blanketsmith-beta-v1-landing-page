import { EmailHeader } from "./EmailHeader";
import { EmailFooter } from "./EmailFooter";
import { EmailButton } from "./EmailButton";
import { EmailProgressRail } from "./EmailProgressRail";
import { EmailFeatureCard } from "./EmailFeatureCard";

interface EmailTemplateProps {
  isDarkMode: boolean;
  isMobile?: boolean;
}

// --- Shared helpers (mirrored from EmailTemplates.tsx) ---

function SectionHeader({
  children,
  isDarkMode,
  align = "center",
}: {
  children: React.ReactNode;
  isDarkMode: boolean;
  align?: "left" | "center";
}) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const textShadow = isDarkMode
    ? "0 0 30px rgba(124, 42, 232, 0.5), 0 0 60px rgba(14, 200, 252, 0.3)"
    : "0 0 20px rgba(124, 42, 232, 0.25), 0 0 40px rgba(14, 200, 252, 0.15)";

  return (
    <h1
      style={{
        margin: "0 0 16px",
        padding: "16px 0",
        fontSize: "28px",
        fontWeight: "700",
        fontFamily: "Poppins, system-ui, sans-serif",
        color: textColor,
        textAlign: align,
        textShadow,
      }}
    >
      {children}
    </h1>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: "linear-gradient(135deg, #7C2AE8 0%, #0EC8FC 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function CinematicShell({
  isDarkMode,
  isMobile,
  children,
}: {
  isDarkMode: boolean;
  isMobile: boolean;
  children: React.ReactNode;
}) {
  const bgColor = isDarkMode ? "#0a0f1a" : "#f8fafc";
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
          <td align="center" style={{ padding: isMobile ? "12px" : "20px" }}>
            <table
              width={isMobile ? "100%" : "600"}
              cellPadding="0"
              cellSpacing="0"
              style={{
                backgroundColor: cardBg,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: isDarkMode
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                maxWidth: "600px",
              }}
            >
              <tbody>
                <tr>
                  <td>
                    <EmailHeader isDarkMode={isDarkMode} />
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: isMobile ? "24px 20px 32px" : "32px 40px 40px" }}>
                    {children}
                  </td>
                </tr>
                <tr>
                  <td>
                    <EmailFooter isDarkMode={isDarkMode} />
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

function InfoBox({
  title,
  description,
  icon,
  isDarkMode,
  isMobile,
  borderColor: borderAccent,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  isDarkMode: boolean;
  isMobile: boolean;
  borderColor?: string;
}) {
  const infoBoxBg = isDarkMode ? "#1e293b" : "#f1f5f9";
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const iconBgGradient = isDarkMode
    ? "linear-gradient(135deg, rgba(124, 42, 232, 0.2) 0%, rgba(14, 200, 252, 0.15) 100%)"
    : "linear-gradient(135deg, rgba(124, 42, 232, 0.1) 0%, rgba(14, 200, 252, 0.08) 100%)";
  const iconGlow = isDarkMode
    ? "0 0 12px rgba(14, 200, 252, 0.3), 0 0 20px rgba(124, 42, 232, 0.2)"
    : "0 0 12px rgba(124, 42, 232, 0.2), 0 0 20px rgba(14, 200, 252, 0.1)";

  return (
    <div
      style={{
        backgroundColor: infoBoxBg,
        borderRadius: "12px",
        padding: isMobile ? "16px" : "20px",
        borderLeft: `4px solid ${borderAccent || "#7C2AE8"}`,
        marginBottom: "16px",
      }}
    >
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td
              width={isMobile ? "44px" : "52px"}
              valign="top"
              style={{ paddingRight: isMobile ? "12px" : "16px" }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: iconBgGradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: iconGlow,
                  border: `1px solid ${isDarkMode ? "rgba(14, 200, 252, 0.2)" : "rgba(124, 42, 232, 0.15)"}`,
                }}
              >
                {icon}
              </div>
            </td>
            <td valign="top">
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: isMobile ? "14px" : "15px",
                  fontWeight: "600",
                  fontFamily: "Poppins, system-ui, sans-serif",
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
                  color: mutedColor,
                }}
              >
                {description}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ========================================
// TEMPLATE: Password Reset (Cinematic)
// ========================================

export function PasswordResetEmail({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const iconStroke = isDarkMode ? "#0ec8fc" : "#7c2ae8";
  const warningColor = "#f59e0b";

  return (
    <CinematicShell isDarkMode={isDarkMode} isMobile={isMobile}>
      {/* Lock Icon */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div
          style={{
            display: "inline-block",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C2AE8 0%, #374FD9 75%, #0EC8FC 100%)",
            boxShadow:
              "0 0 30px rgba(124, 42, 232, 0.3), 0 0 60px rgba(14, 200, 252, 0.15)",
          }}
        >
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ height: "100%" }}>
            <tbody>
              <tr>
                <td align="center" valign="middle" style={{ height: "72px" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <SectionHeader isDarkMode={isDarkMode}>
        Reset Your <GradientText>Password</GradientText>
      </SectionHeader>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.7",
          color: textColor,
          textAlign: "center",
        }}
      >
        We received a request to reset the password associated with your BlanketSmith account.
        Click the button below to create a new password.
      </p>

      {/* CTA Button */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <EmailButton href="#">Reset Password</EmailButton>
      </div>

      {/* Security notice */}
      <InfoBox
        title="Security Notice"
        description="This link expires in 60 minutes. If you didn't request a password reset, you can safely ignore this email — your account remains secure."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
        borderColor={warningColor}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={warningColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        }
      />

      <p
        style={{
          margin: "16px 0 0",
          fontSize: "13px",
          lineHeight: "1.6",
          color: mutedColor,
          textAlign: "center",
        }}
      >
        Having trouble? Contact us at{" "}
        <a href="mailto:support@blanketsmith.com" style={{ color: iconStroke, textDecoration: "none" }}>
          support@blanketsmith.com
        </a>
      </p>
    </CinematicShell>
  );
}

// ========================================
// TEMPLATE: First Pattern Achievement (Cinematic)
// ========================================

export function FirstPatternEmail({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const iconStroke = isDarkMode ? "#0ec8fc" : "#7c2ae8";
  const achievementColor = "#f59e0b";

  return (
    <CinematicShell isDarkMode={isDarkMode} isMobile={isMobile}>
      {/* Trophy Icon */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div
          style={{
            display: "inline-block",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${achievementColor} 0%, #ea580c 100%)`,
            boxShadow: `0 0 30px ${achievementColor}40, 0 0 60px ${achievementColor}20`,
          }}
        >
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ height: "100%" }}>
            <tbody>
              <tr>
                <td align="center" valign="middle" style={{ height: "72px" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0012 0V2z" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <SectionHeader isDarkMode={isDarkMode}>
        Your First <GradientText>Pattern!</GradientText>
      </SectionHeader>

      <p
        style={{
          margin: "0 0 8px",
          fontSize: isMobile ? "18px" : "20px",
          fontWeight: "600",
          fontFamily: "Poppins, system-ui, sans-serif",
          color: achievementColor,
          textAlign: "center",
        }}
      >
        🎉 Milestone Unlocked
      </p>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.7",
          color: textColor,
          textAlign: "center",
        }}
      >
        Congratulations! You've just created your very first pattern in The Forge.
        This is the beginning of something beautiful — every masterpiece starts with a single stitch.
      </p>

      {/* Achievement Card */}
      <div
        style={{
          background: isDarkMode
            ? "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(234, 88, 12, 0.08) 100%)"
            : "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(234, 88, 12, 0.05) 100%)",
          borderRadius: "12px",
          padding: isMobile ? "20px" : "24px",
          border: `1px solid ${isDarkMode ? "rgba(245, 158, 11, 0.2)" : "rgba(245, 158, 11, 0.3)"}`,
          textAlign: "center",
          marginBottom: "28px",
        }}
      >
        <p
          style={{
            margin: "0 0 4px",
            fontSize: "12px",
            fontWeight: "600",
            fontFamily: "Inter, system-ui, sans-serif",
            textTransform: "uppercase" as const,
            letterSpacing: "0.1em",
            color: achievementColor,
          }}
        >
          Achievement
        </p>
        <p
          style={{
            margin: "0 0 4px",
            fontSize: "22px",
            fontWeight: "700",
            fontFamily: "Poppins, system-ui, sans-serif",
            color: textColor,
          }}
        >
          First Pattern Created
        </p>
        <p style={{ margin: "0", fontSize: "13px", color: mutedColor }}>
          Pattern #001 · Completed just now
        </p>
      </div>

      {/* Feature Cards */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "24px" }}>
        <tbody>
          {isMobile ? (
            <>
              <tr>
                <EmailFeatureCard
                  title="Share Your Work"
                  description="Show your creation to the BlanketSmith community and inspire others."
                  isDarkMode={isDarkMode}
                  icon="users"
                  fullWidth
                />
              </tr>
              <tr>
                <EmailFeatureCard
                  title="Explore Templates"
                  description="Discover community patterns and find inspiration for your next project."
                  isDarkMode={isDarkMode}
                  icon="layout"
                  fullWidth
                />
              </tr>
            </>
          ) : (
            <tr>
              <EmailFeatureCard
                title="Share Your Work"
                description="Show your creation to the BlanketSmith community and inspire others."
                isDarkMode={isDarkMode}
                icon="users"
              />
              <EmailFeatureCard
                title="Explore Templates"
                description="Discover community patterns and find inspiration for your next project."
                isDarkMode={isDarkMode}
                icon="layout"
              />
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ textAlign: "center" }}>
        <EmailButton href="#">View Your Pattern</EmailButton>
      </div>
    </CinematicShell>
  );
}

// ========================================
// TEMPLATE: Beta Credentials (Cinematic)
// ========================================

export function BetaCredentialsEmail({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const iconStroke = isDarkMode ? "#0ec8fc" : "#7c2ae8";
  const infoBoxBg = isDarkMode ? "#1e293b" : "#f1f5f9";
  const codeBg = isDarkMode ? "#0a0f1a" : "#f1f5f9";
  const codeColor = isDarkMode ? "#0ec8fc" : "#7c2ae8";

  return (
    <CinematicShell isDarkMode={isDarkMode} isMobile={isMobile}>
      {/* Key Icon */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div
          style={{
            display: "inline-block",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C2AE8 0%, #374FD9 75%, #0EC8FC 100%)",
            boxShadow:
              "0 0 30px rgba(124, 42, 232, 0.3), 0 0 60px rgba(14, 200, 252, 0.15)",
          }}
        >
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ height: "100%" }}>
            <tbody>
              <tr>
                <td align="center" valign="middle" style={{ height: "72px" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <SectionHeader isDarkMode={isDarkMode}>
        Your Beta <GradientText>Credentials</GradientText>
      </SectionHeader>

      {/* Progress Rail - Step 3 (Beta Access) */}
      <EmailProgressRail currentStep={2} isDarkMode={isDarkMode} />

      <p
        style={{
          margin: "0 0 24px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.7",
          color: textColor,
        }}
      >
        Great news — your Beta credentials are ready! Use the details below to log in to
        The Forge and start exploring. This is your personal access — please keep it secure.
      </p>

      {/* Credentials Card */}
      <div
        style={{
          backgroundColor: codeBg,
          borderRadius: "12px",
          padding: isMobile ? "20px" : "24px",
          border: `1px solid ${isDarkMode ? "#1e293b" : "#e2e8f0"}`,
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
              <td style={{ paddingBottom: "12px", borderTop: `1px solid ${isDarkMode ? "#1e293b" : "#e2e8f0"}`, paddingTop: "12px" }}>
                <p style={{ margin: "0 0 4px", fontSize: "11px", fontWeight: "600", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: mutedColor, fontFamily: "Inter, system-ui, sans-serif" }}>
                  Username
                </p>
                <p style={{ margin: "0", fontSize: "14px", fontWeight: "600", color: textColor, fontFamily: "monospace" }}>
                  your-email@example.com
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ borderTop: `1px solid ${isDarkMode ? "#1e293b" : "#e2e8f0"}`, paddingTop: "12px" }}>
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

      {/* CTA */}
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <EmailButton href="#">Log In to The Forge</EmailButton>
      </div>

      <InfoBox
        title="Important"
        description="You'll be prompted to set a new password on your first login. Your temporary credentials expire in 7 days."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
        borderColor="#7C2AE8"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        }
      />
    </CinematicShell>
  );
}

// ========================================
// TEMPLATE: Beta Kick-Off (Cinematic)
// ========================================

export function BetaKickOffEmail({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const iconStroke = isDarkMode ? "#0ec8fc" : "#7c2ae8";

  return (
    <CinematicShell isDarkMode={isDarkMode} isMobile={isMobile}>
      {/* Rocket Icon */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div
          style={{
            display: "inline-block",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C2AE8 0%, #374FD9 75%, #0EC8FC 100%)",
            boxShadow:
              "0 0 30px rgba(124, 42, 232, 0.3), 0 0 60px rgba(14, 200, 252, 0.15)",
          }}
        >
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ height: "100%" }}>
            <tbody>
              <tr>
                <td align="center" valign="middle" style={{ height: "72px" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
                    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <SectionHeader isDarkMode={isDarkMode}>
        The Beta is <GradientText>Live!</GradientText>
      </SectionHeader>

      <p
        style={{
          margin: "0 0 8px",
          fontSize: isMobile ? "18px" : "20px",
          fontWeight: "600",
          fontFamily: "Poppins, system-ui, sans-serif",
          color: textColor,
          textAlign: "center",
        }}
      >
        🚀 Welcome to Day One
      </p>

      <p
        style={{
          margin: "0 0 28px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.7",
          color: textColor,
          textAlign: "center",
        }}
      >
        The BlanketSmith Beta is officially live, and you're among the first makers to access
        The Forge. This is the moment we've been building toward — and we're thrilled to have
        you along for the ride.
      </p>

      {/* Feature Cards - What's in the Beta */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "16px" }}>
        <tbody>
          {isMobile ? (
            <>
              <tr>
                <EmailFeatureCard
                  title="Pattern Generator"
                  description="Create precise, production-ready patterns from your measurements."
                  isDarkMode={isDarkMode}
                  icon="zap"
                  fullWidth
                />
              </tr>
              <tr>
                <EmailFeatureCard
                  title="Precision Editor"
                  description="Fine-tune every stitch with our professional-grade editing suite."
                  isDarkMode={isDarkMode}
                  icon="settings"
                  fullWidth
                />
              </tr>
              <tr>
                <EmailFeatureCard
                  title="The Community"
                  description="Connect with makers, share patterns, and get feedback in Discord."
                  isDarkMode={isDarkMode}
                  icon="users"
                  fullWidth
                />
              </tr>
              <tr>
                <EmailFeatureCard
                  title="Feedback Loop"
                  description="Shape the product — your input directly influences our roadmap."
                  isDarkMode={isDarkMode}
                  icon="lightbulb"
                  fullWidth
                />
              </tr>
            </>
          ) : (
            <>
              <tr>
                <EmailFeatureCard
                  title="Pattern Generator"
                  description="Create precise, production-ready patterns from your measurements."
                  isDarkMode={isDarkMode}
                  icon="zap"
                />
                <EmailFeatureCard
                  title="Precision Editor"
                  description="Fine-tune every stitch with our professional-grade editing suite."
                  isDarkMode={isDarkMode}
                  icon="settings"
                />
              </tr>
              <tr>
                <EmailFeatureCard
                  title="The Community"
                  description="Connect with makers, share patterns, and get feedback in Discord."
                  isDarkMode={isDarkMode}
                  icon="users"
                />
                <EmailFeatureCard
                  title="Feedback Loop"
                  description="Shape the product — your input directly influences our roadmap."
                  isDarkMode={isDarkMode}
                  icon="lightbulb"
                />
              </tr>
            </>
          )}
        </tbody>
      </table>

      <InfoBox
        title="How to make the most of Beta"
        description="Explore freely, break things, and tell us about it. We've built a dedicated feedback channel in Discord and an in-app feedback tool. Every bug report and feature request helps us build a better Forge."
        isDarkMode={isDarkMode}
        isMobile={isMobile}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        }
      />

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <EmailButton href="#">Enter The Forge</EmailButton>
      </div>
    </CinematicShell>
  );
}
