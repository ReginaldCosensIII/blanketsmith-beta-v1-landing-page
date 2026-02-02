import verticalLogoSlogan from "@/assets/vertical-logo-slogan.svg";
import verticalLogoSloganWhite from "@/assets/vertical-logo-slogan-white.svg";

interface EmailHeaderProps {
  isDarkMode: boolean;
}

export function EmailHeader({ isDarkMode }: EmailHeaderProps) {
  const bgColor = isDarkMode ? "#0f172a" : "#ffffff";
  const orbColor1 = isDarkMode ? "rgba(124, 42, 232, 0.15)" : "rgba(124, 42, 232, 0.08)";
  const orbColor2 = isDarkMode ? "rgba(14, 200, 252, 0.12)" : "rgba(14, 200, 252, 0.06)";
  const logo = isDarkMode ? verticalLogoSloganWhite : verticalLogoSlogan;

  return (
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `
          radial-gradient(ellipse at 15% 15%, ${orbColor1} 0%, transparent 50%),
          radial-gradient(ellipse at 85% 85%, ${orbColor2} 0%, transparent 50%)
        `,
      }}
    >
      <tbody>
        <tr>
          <td align="center" style={{ padding: "40px 20px 32px" }}>
            <img
              src={logo}
              alt="BlanketSmith"
              width="180"
              style={{
                display: "block",
                maxWidth: "180px",
                height: "auto",
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

// Export inline HTML version for copy functionality
export function getEmailHeaderHTML(isDarkMode: boolean, logoUrl: string): string {
  const bgColor = isDarkMode ? "#0f172a" : "#ffffff";
  const orbColor1 = isDarkMode ? "rgba(124, 42, 232, 0.15)" : "rgba(124, 42, 232, 0.08)";
  const orbColor2 = isDarkMode ? "rgba(14, 200, 252, 0.12)" : "rgba(14, 200, 252, 0.06)";

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${bgColor}; background-image: radial-gradient(ellipse at 15% 15%, ${orbColor1} 0%, transparent 50%), radial-gradient(ellipse at 85% 85%, ${orbColor2} 0%, transparent 50%);">
      <tr>
        <td align="center" style="padding: 40px 20px 32px;">
          <img src="${logoUrl}" alt="BlanketSmith" width="180" style="display: block; max-width: 180px; height: auto;" />
        </td>
      </tr>
    </table>
  `;
}
