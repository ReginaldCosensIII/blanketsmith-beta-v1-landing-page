import { EmailHeader } from "./EmailHeader";
import { EmailFooter } from "./EmailFooter";
import { EmailButton } from "./EmailButton";
import { EmailProgressRail } from "./EmailProgressRail";
import { EmailFeatureCard } from "./EmailFeatureCard";

interface EmailTemplateProps {
  isDarkMode: boolean;
  isMobile?: boolean;
}

// Shared section header with radial glow - increased padding for visible glow
function SectionHeader({ 
  children, 
  isDarkMode,
  align = "center" 
}: { 
  children: React.ReactNode; 
  isDarkMode: boolean;
  align?: "left" | "center";
}) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const glowColor = isDarkMode 
    ? "radial-gradient(ellipse 280px 140px at 50% 50%, rgba(124, 42, 232, 0.35) 0%, rgba(14, 200, 252, 0.25) 40%, transparent 70%)"
    : "radial-gradient(ellipse 280px 140px at 50% 50%, rgba(124, 42, 232, 0.18) 0%, rgba(14, 200, 252, 0.12) 40%, transparent 70%)";

  return (
    <div
      style={{
        position: "relative",
        textAlign: align,
        paddingTop: "24px",
        paddingBottom: "24px",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          height: "120px",
          background: glowColor,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <h1
        style={{
          position: "relative",
          margin: "0",
          fontSize: "28px",
          fontWeight: "700",
          fontFamily: "Poppins, system-ui, sans-serif",
          color: textColor,
          zIndex: 1,
        }}
      >
        {children}
      </h1>
    </div>
  );
}

// Gradient text span component
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

export function BetaWelcomeEmail({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const bgColor = isDarkMode ? "#0a0f1a" : "#f8fafc";
  const cardBg = isDarkMode ? "#0f172a" : "#ffffff";
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const infoBoxBg = isDarkMode ? "#1e293b" : "#f1f5f9";
  const iconStroke = isDarkMode ? "#0ec8fc" : "#7c2ae8";
  const iconGlow = isDarkMode 
    ? "0 0 12px rgba(14, 200, 252, 0.3), 0 0 20px rgba(124, 42, 232, 0.2)"
    : "0 0 12px rgba(124, 42, 232, 0.2), 0 0 20px rgba(14, 200, 252, 0.1)";
  const iconBgGradient = isDarkMode 
    ? "linear-gradient(135deg, rgba(124, 42, 232, 0.2) 0%, rgba(14, 200, 252, 0.15) 100%)"
    : "linear-gradient(135deg, rgba(124, 42, 232, 0.1) 0%, rgba(14, 200, 252, 0.08) 100%)";

  const containerPadding = isMobile ? "24px 20px 32px" : "32px 40px 40px";

  return (
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{
        backgroundColor: bgColor,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
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
                {/* Header */}
                <tr>
                  <td>
                    <EmailHeader isDarkMode={isDarkMode} />
                  </td>
                </tr>

                {/* Body */}
                <tr>
                  <td style={{ padding: containerPadding }}>
                    {/* Welcome Title */}
                    <SectionHeader isDarkMode={isDarkMode}>
                      Welcome to <GradientText>The Forge</GradientText>
                    </SectionHeader>

                    <p
                      style={{
                        margin: "0 0 32px",
                        fontSize: isMobile ? "16px" : "18px",
                        fontWeight: "500",
                        color: mutedColor,
                        textAlign: "center",
                      }}
                    >
                      You're in.
                    </p>

                    {/* Progress Rail */}
                    <EmailProgressRail currentStep={1} isDarkMode={isDarkMode} />

                    {/* Main Copy */}
                    <p
                      style={{
                        margin: "0 0 24px",
                        fontSize: isMobile ? "14px" : "15px",
                        lineHeight: "1.7",
                        color: textColor,
                      }}
                    >
                      BlanketSmith is currently in a limited Beta, and you've secured a 
                      front-row seat to the future of pattern design. We're building something 
                      special for makers who value precision, creativity, and a streamlined workflow.
                    </p>

                    <p
                      style={{
                        margin: "0 0 32px",
                        fontSize: isMobile ? "14px" : "15px",
                        lineHeight: "1.7",
                        color: textColor,
                      }}
                    >
                      Please verify your email to continue your journey into The Forge.
                    </p>

                    {/* CTA Button */}
                    <div style={{ textAlign: "center", marginBottom: "32px" }}>
                      <EmailButton href="#">Verify Email Address</EmailButton>
                    </div>

                    {/* Feature Cards - Stack on mobile */}
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tbody>
                        {isMobile ? (
                          <>
                            <tr>
                              <EmailFeatureCard
                                title="Instant Patterns"
                                description="Transform your vision into precise, ready-to-use patterns in seconds."
                                isDarkMode={isDarkMode}
                                icon="zap"
                                fullWidth
                              />
                            </tr>
                            <tr>
                              <EmailFeatureCard
                                title="Modern Interface"
                                description="A beautiful, intuitive design built for the modern maker."
                                isDarkMode={isDarkMode}
                                icon="layout"
                                fullWidth
                              />
                            </tr>
                            <tr>
                              <EmailFeatureCard
                                title="Precision Tools"
                                description="Fine-tune every detail with our professional-grade editing tools."
                                isDarkMode={isDarkMode}
                                icon="settings"
                                fullWidth
                              />
                            </tr>
                            <tr>
                              <EmailFeatureCard
                                title="Community First"
                                description="Join a growing community of passionate crafters and creators."
                                isDarkMode={isDarkMode}
                                icon="users"
                                fullWidth
                              />
                            </tr>
                          </>
                        ) : (
                          <>
                            <tr>
                              <EmailFeatureCard
                                title="Instant Patterns"
                                description="Transform your vision into precise, ready-to-use patterns in seconds."
                                isDarkMode={isDarkMode}
                                icon="zap"
                              />
                              <EmailFeatureCard
                                title="Modern Interface"
                                description="A beautiful, intuitive design built for the modern maker."
                                isDarkMode={isDarkMode}
                                icon="layout"
                              />
                            </tr>
                            <tr>
                              <EmailFeatureCard
                                title="Precision Tools"
                                description="Fine-tune every detail with our professional-grade editing tools."
                                isDarkMode={isDarkMode}
                                icon="settings"
                              />
                              <EmailFeatureCard
                                title="Community First"
                                description="Join a growing community of passionate crafters and creators."
                                isDarkMode={isDarkMode}
                                icon="users"
                              />
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>

                    {/* What Happens Next section */}
                    <div
                      style={{
                        backgroundColor: infoBoxBg,
                        borderRadius: "12px",
                        padding: isMobile ? "16px" : "20px",
                        marginTop: "24px",
                        borderLeft: "4px solid #7C2AE8",
                      }}
                    >
                      <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            {/* Icon */}
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
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={iconStroke}
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M9 21h6 M12 3a6 6 0 016 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 016-6z" />
                                </svg>
                              </div>
                            </td>
                            {/* Content */}
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
                                What Happens Next?
                              </p>
                              <p
                                style={{
                                  margin: "0",
                                  fontSize: isMobile ? "13px" : "14px",
                                  lineHeight: "1.6",
                                  color: mutedColor,
                                }}
                              >
                                Once verified, you'll receive your Beta credentials via email within 24-48 hours. 
                                These credentials will grant you early access to The Forge where you can start 
                                creating patterns, exploring tools, and joining our community of makers.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>

                {/* Footer */}
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

export function PartnershipEmail({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const bgColor = isDarkMode ? "#0a0f1a" : "#f8fafc";
  const cardBg = isDarkMode ? "#0f172a" : "#ffffff";
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";

  const containerPadding = isMobile ? "24px 20px 32px" : "32px 40px 40px";

  return (
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{
        backgroundColor: bgColor,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
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
                  <td style={{ padding: containerPadding }}>
                    <SectionHeader isDarkMode={isDarkMode}>
                      Let's Build the <GradientText>Future of Craft</GradientText>
                    </SectionHeader>

                    <p
                      style={{
                        margin: "0 0 24px",
                        fontSize: isMobile ? "14px" : "15px",
                        lineHeight: "1.7",
                        color: textColor,
                      }}
                    >
                      Thank you for reaching out about a potential partnership. We sit at the 
                      intersection of craftsmanship and modern software, and we're always excited 
                      to explore collaborations that push the boundaries of what's possible.
                    </p>

                    <p
                      style={{
                        margin: "0 0 24px",
                        fontSize: isMobile ? "14px" : "15px",
                        lineHeight: "1.7",
                        color: textColor,
                      }}
                    >
                      Our team has received your inquiry and will be reviewing it carefully. 
                      We typically respond within 2-3 business days, but please know that every 
                      partnership opportunity receives our full attention.
                    </p>

                    <p
                      style={{
                        margin: "0 0 32px",
                        fontSize: isMobile ? "14px" : "15px",
                        lineHeight: "1.7",
                        color: mutedColor,
                        fontStyle: "italic",
                      }}
                    >
                      "The best tools are built by those who understand both the craft and the maker."
                    </p>

                    <div style={{ textAlign: "center", marginBottom: "24px" }}>
                      <EmailButton href="#">Learn More About BlanketSmith</EmailButton>
                    </div>
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

export function FeedbackEmail({ isDarkMode, isMobile = false }: EmailTemplateProps) {
  const bgColor = isDarkMode ? "#0a0f1a" : "#f8fafc";
  const cardBg = isDarkMode ? "#0f172a" : "#ffffff";
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const infoBoxBg = isDarkMode ? "#1e293b" : "#f1f5f9";
  const iconStroke = isDarkMode ? "#0ec8fc" : "#7c2ae8";
  const iconGlow = isDarkMode 
    ? "0 0 12px rgba(14, 200, 252, 0.3), 0 0 20px rgba(124, 42, 232, 0.2)"
    : "0 0 12px rgba(124, 42, 232, 0.2), 0 0 20px rgba(14, 200, 252, 0.1)";
  const iconBgGradient = isDarkMode 
    ? "linear-gradient(135deg, rgba(124, 42, 232, 0.2) 0%, rgba(14, 200, 252, 0.15) 100%)"
    : "linear-gradient(135deg, rgba(124, 42, 232, 0.1) 0%, rgba(14, 200, 252, 0.08) 100%)";

  const containerPadding = isMobile ? "24px 20px 32px" : "32px 40px 40px";

  return (
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{
        backgroundColor: bgColor,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
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
                  <td style={{ padding: containerPadding }}>
                    <SectionHeader isDarkMode={isDarkMode}>
                      Your Feedback is in <GradientText>The Forge</GradientText>
                    </SectionHeader>

                    <p
                      style={{
                        margin: "0 0 24px",
                        fontSize: isMobile ? "14px" : "15px",
                        lineHeight: "1.7",
                        color: textColor,
                      }}
                    >
                      Accuracy and craftsmanship matter deeply to us. Your input is exactly how 
                      we evolve, and we want you to know that your feedback has been received 
                      and will be carefully reviewed by our team.
                    </p>

                    <p
                      style={{
                        margin: "0 0 24px",
                        fontSize: isMobile ? "14px" : "15px",
                        lineHeight: "1.7",
                        color: textColor,
                      }}
                    >
                      Every suggestion, bug report, and feature request helps us build a better 
                      tool for the entire maker community. We're in this together.
                    </p>

                    {/* What Happens Next section with icon */}
                    <div
                      style={{
                        backgroundColor: infoBoxBg,
                        borderRadius: "12px",
                        padding: isMobile ? "16px" : "20px",
                        marginBottom: "32px",
                        borderLeft: "4px solid #7C2AE8",
                      }}
                    >
                      <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            {/* Icon */}
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
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={iconStroke}
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M9 21h6 M12 3a6 6 0 016 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 016-6z" />
                                </svg>
                              </div>
                            </td>
                            {/* Content */}
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
                                What happens next?
                              </p>
                              <p
                                style={{
                                  margin: "0",
                                  fontSize: isMobile ? "13px" : "14px",
                                  lineHeight: "1.6",
                                  color: mutedColor,
                                }}
                              >
                                Our team reviews all feedback weekly. If we need more details, we'll 
                                reach out directly. Major updates inspired by community input are 
                                highlighted in our changelog.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div style={{ textAlign: "center" }}>
                      <EmailButton href="#">View Our Roadmap</EmailButton>
                    </div>
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
