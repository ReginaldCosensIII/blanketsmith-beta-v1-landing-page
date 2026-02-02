import { EmailHeader } from "./EmailHeader";
import { EmailFooter } from "./EmailFooter";
import { EmailButton } from "./EmailButton";
import { EmailProgressRail } from "./EmailProgressRail";
import { EmailFeatureCard } from "./EmailFeatureCard";

interface EmailTemplateProps {
  isDarkMode: boolean;
}

export function BetaWelcomeEmail({ isDarkMode }: EmailTemplateProps) {
  const bgColor = isDarkMode ? "#0a0f1a" : "#f8fafc";
  const cardBg = isDarkMode ? "#0f172a" : "#ffffff";
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";
  const borderColor = isDarkMode ? "#1e293b" : "#e2e8f0";

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
          <td align="center" style={{ padding: "20px" }}>
            <table
              width="600"
              cellPadding="0"
              cellSpacing="0"
              style={{
                backgroundColor: cardBg,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: isDarkMode
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
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
                  <td style={{ padding: "0 40px 40px" }}>
                    {/* Welcome Title */}
                    <h1
                      style={{
                        margin: "0 0 8px",
                        fontSize: "28px",
                        fontWeight: "700",
                        fontFamily: "Poppins, system-ui, sans-serif",
                        color: textColor,
                        textAlign: "center",
                      }}
                    >
                      Welcome to{" "}
                      <span
                        style={{
                          background: "linear-gradient(135deg, #7C2AE8 0%, #0EC8FC 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        The Forge
                      </span>
                    </h1>

                    <p
                      style={{
                        margin: "0 0 32px",
                        fontSize: "18px",
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
                        fontSize: "15px",
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
                        fontSize: "15px",
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

                    {/* Feature Cards */}
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <EmailFeatureCard
                            title="Instant Patterns"
                            description="Transform your vision into precise, ready-to-use patterns in seconds."
                            isDarkMode={isDarkMode}
                          />
                          <EmailFeatureCard
                            title="Modern Interface"
                            description="A beautiful, intuitive design built for the modern maker."
                            isDarkMode={isDarkMode}
                          />
                        </tr>
                        <tr>
                          <EmailFeatureCard
                            title="Precision Tools"
                            description="Fine-tune every detail with our professional-grade editing tools."
                            isDarkMode={isDarkMode}
                          />
                          <EmailFeatureCard
                            title="Community First"
                            description="Join a growing community of passionate crafters and creators."
                            isDarkMode={isDarkMode}
                          />
                        </tr>
                      </tbody>
                    </table>
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

export function PartnershipEmail({ isDarkMode }: EmailTemplateProps) {
  const bgColor = isDarkMode ? "#0a0f1a" : "#f8fafc";
  const cardBg = isDarkMode ? "#0f172a" : "#ffffff";
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";

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
          <td align="center" style={{ padding: "20px" }}>
            <table
              width="600"
              cellPadding="0"
              cellSpacing="0"
              style={{
                backgroundColor: cardBg,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: isDarkMode
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <tbody>
                <tr>
                  <td>
                    <EmailHeader isDarkMode={isDarkMode} />
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "0 40px 40px" }}>
                    <h1
                      style={{
                        margin: "0 0 24px",
                        fontSize: "28px",
                        fontWeight: "700",
                        fontFamily: "Poppins, system-ui, sans-serif",
                        color: textColor,
                        textAlign: "center",
                      }}
                    >
                      Let's Build the{" "}
                      <span
                        style={{
                          background: "linear-gradient(135deg, #7C2AE8 0%, #0EC8FC 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        Future of Craft
                      </span>
                    </h1>

                    <p
                      style={{
                        margin: "0 0 24px",
                        fontSize: "15px",
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
                        fontSize: "15px",
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
                        fontSize: "15px",
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

export function FeedbackEmail({ isDarkMode }: EmailTemplateProps) {
  const bgColor = isDarkMode ? "#0a0f1a" : "#f8fafc";
  const cardBg = isDarkMode ? "#0f172a" : "#ffffff";
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#94a3b8" : "#64748b";

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
          <td align="center" style={{ padding: "20px" }}>
            <table
              width="600"
              cellPadding="0"
              cellSpacing="0"
              style={{
                backgroundColor: cardBg,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: isDarkMode
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <tbody>
                <tr>
                  <td>
                    <EmailHeader isDarkMode={isDarkMode} />
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "0 40px 40px" }}>
                    <h1
                      style={{
                        margin: "0 0 24px",
                        fontSize: "28px",
                        fontWeight: "700",
                        fontFamily: "Poppins, system-ui, sans-serif",
                        color: textColor,
                        textAlign: "center",
                      }}
                    >
                      Your Feedback is in{" "}
                      <span
                        style={{
                          background: "linear-gradient(135deg, #7C2AE8 0%, #0EC8FC 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        The Forge
                      </span>
                    </h1>

                    <p
                      style={{
                        margin: "0 0 24px",
                        fontSize: "15px",
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
                        fontSize: "15px",
                        lineHeight: "1.7",
                        color: textColor,
                      }}
                    >
                      Every suggestion, bug report, and feature request helps us build a better 
                      tool for the entire maker community. We're in this together.
                    </p>

                    <div
                      style={{
                        backgroundColor: isDarkMode ? "#1e293b" : "#f1f5f9",
                        borderRadius: "12px",
                        padding: "20px",
                        marginBottom: "32px",
                        borderLeft: "4px solid #7C2AE8",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                          fontSize: "14px",
                          lineHeight: "1.6",
                          color: mutedColor,
                        }}
                      >
                        <strong style={{ color: textColor }}>What happens next?</strong>
                        <br />
                        Our team reviews all feedback weekly. If we need more details, we'll 
                        reach out directly. Major updates inspired by community input are 
                        highlighted in our changelog.
                      </p>
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
