import logoHorizontal from "@/assets/logo-horizontal.svg";
import horizontalLogoWhite from "@/assets/horizontal-logo-white.svg";
import faviconBadge from "@/assets/favicon-badge.svg";

interface EmailFooterB2Props {
  isDarkMode: boolean;
}

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/blanketsmith" },
  { label: "Twitter", href: "https://twitter.com/blanketsmith" },
  { label: "Instagram", href: "https://instagram.com/blanketsmith" },
  { label: "YouTube", href: "https://youtube.com/@blanketsmith" },
  { label: "Discord", href: "https://discord.gg/blanketsmith" },
];

export function EmailFooterB2({ isDarkMode }: EmailFooterB2Props) {
  const bgColor = isDarkMode ? "#0f172a" : "#ffffff";
  const textColor = isDarkMode ? "#64748b" : "#94a3b8";
  const linkColor = isDarkMode ? "#94a3b8" : "#64748b";
  const borderColor = isDarkMode ? "#1e293b" : "#e2e8f0";
  const logo = isDarkMode ? horizontalLogoWhite : logoHorizontal;

  return (
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{ backgroundColor: bgColor }}
    >
      <tbody>
        {/* Gradient divider */}
        <tr>
          <td style={{ padding: "0 40px" }}>
            <div
              style={{
                height: "1px",
                background: "linear-gradient(90deg, #7C2AE8 0%, #374FD9 50%, #0EC8FC 100%)",
                opacity: 0.4,
              }}
            />
          </td>
        </tr>
        {/* Footer content */}
        <tr>
          <td style={{ padding: "28px 40px 24px" }}>
            {/* Logo */}
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "20px" }}>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={logo}
                      alt="BlanketSmith"
                      width="120"
                      style={{ display: "block", maxWidth: "120px", height: "auto" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Social links - inline */}
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "20px" }}>
              <tbody>
                <tr>
                  <td>
                    {socialLinks.map((link, i) => (
                      <span key={link.label}>
                        <a
                          href={link.href}
                          style={{
                            color: linkColor,
                            fontSize: "12px",
                            fontFamily: "Inter, system-ui, sans-serif",
                            textDecoration: "none",
                          }}
                        >
                          {link.label}
                        </a>
                        {i < socialLinks.length - 1 && (
                          <span style={{ color: textColor, fontSize: "12px", padding: "0 8px" }}>·</span>
                        )}
                      </span>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Legal + Community Credit */}
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td>
                    <p
                      style={{
                        color: textColor,
                        fontSize: "11px",
                        fontFamily: "Inter, system-ui, sans-serif",
                        margin: "0 0 12px",
                        lineHeight: "1.6",
                      }}
                    >
                      <a href="#" style={{ color: textColor, textDecoration: "underline" }}>Unsubscribe</a>
                      {" · "}
                      <a href="#" style={{ color: textColor, textDecoration: "underline" }}>Privacy Policy</a>
                      {" · "}
                      <a href="#" style={{ color: textColor, textDecoration: "underline" }}>Terms of Service</a>
                    </p>
                    <p
                      style={{
                        color: textColor,
                        fontSize: "11px",
                        fontFamily: "Inter, system-ui, sans-serif",
                        margin: "0 0 8px",
                      }}
                    >
                      Made with{" "}
                      <img
                        src={faviconBadge}
                        alt="love"
                        width="14"
                        height="14"
                        style={{ display: "inline-block", verticalAlign: "middle" }}
                      />{" "}
                      for the community
                    </p>
                    <p
                      style={{
                        color: textColor,
                        fontSize: "10px",
                        fontFamily: "Inter, system-ui, sans-serif",
                        margin: "0",
                      }}
                    >
                      © {new Date().getFullYear()} BlanketSmith. All rights reserved.
                    </p>
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
