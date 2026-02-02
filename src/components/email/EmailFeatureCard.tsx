interface EmailFeatureCardProps {
  title: string;
  description: string;
  isDarkMode: boolean;
}

export function EmailFeatureCard({ title, description, isDarkMode }: EmailFeatureCardProps) {
  const bgColor = isDarkMode ? "#1e293b" : "#ffffff";
  const borderColor = isDarkMode ? "#334155" : "#e2e8f0";
  const titleColor = isDarkMode ? "#f1f5f9" : "#1e293b";
  const textColor = isDarkMode ? "#94a3b8" : "#64748b";
  const accentBorder = isDarkMode 
    ? "2px solid rgba(14, 200, 252, 0.3)" 
    : "2px solid rgba(124, 42, 232, 0.2)";

  return (
    <td
      width="50%"
      valign="top"
      style={{
        padding: "8px",
      }}
    >
      <div
        style={{
          backgroundColor: bgColor,
          borderRadius: "12px",
          border: `1px solid ${borderColor}`,
          borderLeft: accentBorder,
          padding: "20px",
          height: "120px",
          boxSizing: "border-box",
        }}
      >
        <h4
          style={{
            margin: "0 0 8px",
            fontSize: "15px",
            fontWeight: "600",
            fontFamily: "Poppins, system-ui, sans-serif",
            color: titleColor,
          }}
        >
          {title}
        </h4>
        <p
          style={{
            margin: "0",
            fontSize: "13px",
            lineHeight: "1.5",
            fontFamily: "Inter, system-ui, sans-serif",
            color: textColor,
          }}
        >
          {description}
        </p>
      </div>
    </td>
  );
}

export function getEmailFeatureCardHTML(
  title: string,
  description: string,
  isDarkMode: boolean
): string {
  const bgColor = isDarkMode ? "#1e293b" : "#ffffff";
  const borderColor = isDarkMode ? "#334155" : "#e2e8f0";
  const titleColor = isDarkMode ? "#f1f5f9" : "#1e293b";
  const textColor = isDarkMode ? "#94a3b8" : "#64748b";
  const accentBorder = isDarkMode 
    ? "2px solid rgba(14, 200, 252, 0.3)" 
    : "2px solid rgba(124, 42, 232, 0.2)";

  return `
    <td width="50%" valign="top" style="padding: 8px;">
      <div style="background-color: ${bgColor}; border-radius: 12px; border: 1px solid ${borderColor}; border-left: ${accentBorder}; padding: 20px; height: 120px; box-sizing: border-box;">
        <h4 style="margin: 0 0 8px; font-size: 15px; font-weight: 600; font-family: Poppins, system-ui, sans-serif; color: ${titleColor};">${title}</h4>
        <p style="margin: 0; font-size: 13px; line-height: 1.5; font-family: Inter, system-ui, sans-serif; color: ${textColor};">${description}</p>
      </div>
    </td>
  `;
}
