import logoHorizontal from "@/assets/logo-horizontal.svg";
import horizontalLogoWhite from "@/assets/horizontal-logo-white.svg";

interface EmailHeaderB2Props {
  isDarkMode: boolean;
}

export function EmailHeaderB2({ isDarkMode }: EmailHeaderB2Props) {
  const bgColor = isDarkMode ? "#0f172a" : "#ffffff";
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
        {/* Gradient accent bar at top */}
        <tr>
          <td>
            <div
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #7C2AE8 0%, #374FD9 50%, #0EC8FC 100%)",
              }}
            />
          </td>
        </tr>
        {/* Logo row */}
        <tr>
          <td
            style={{
              padding: "32px 40px 28px",
              borderBottom: `1px solid ${borderColor}`,
            }}
          >
            <img
              src={logo}
              alt="BlanketSmith"
              width="160"
              style={{
                display: "block",
                maxWidth: "160px",
                height: "auto",
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
