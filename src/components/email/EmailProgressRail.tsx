interface EmailProgressRailProps {
  currentStep: number;
  isDarkMode: boolean;
}

const steps = ["Signup", "Verification", "Beta Access", "Forge"];

export function EmailProgressRail({ currentStep, isDarkMode }: EmailProgressRailProps) {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#64748b" : "#94a3b8";
  const activeGradient = "linear-gradient(135deg, #7C2AE8 0%, #374FD9 75%, #0EC8FC 100%)";
  const inactiveBg = isDarkMode ? "#1e293b" : "#e2e8f0";

  return (
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "32px" }}>
      <tbody>
        <tr>
          <td>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  {steps.map((step, index) => (
                    <td
                      key={step}
                      align="center"
                      width={`${100 / steps.length}%`}
                      style={{ position: "relative" }}
                    >
                      {/* Step circle */}
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: index <= currentStep ? activeGradient : inactiveBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 8px",
                          color: index <= currentStep ? "#fff" : mutedColor,
                          fontFamily: "Poppins, system-ui, sans-serif",
                          fontWeight: "600",
                          fontSize: "14px",
                        }}
                      >
                        {index + 1}
                      </div>
                      {/* Step label */}
                      <span
                        style={{
                          display: "block",
                          fontSize: "12px",
                          fontFamily: "Inter, system-ui, sans-serif",
                          color: index <= currentStep ? textColor : mutedColor,
                          fontWeight: index === currentStep ? "600" : "400",
                        }}
                      >
                        {step}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            {/* Progress line */}
            <div
              style={{
                position: "relative",
                height: "4px",
                backgroundColor: inactiveBg,
                borderRadius: "2px",
                marginTop: "-42px",
                marginBottom: "50px",
                marginLeft: "12.5%",
                marginRight: "12.5%",
                zIndex: -1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                  background: activeGradient,
                  borderRadius: "2px",
                }}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function getEmailProgressRailHTML(currentStep: number, isDarkMode: boolean): string {
  const textColor = isDarkMode ? "#e2e8f0" : "#1e293b";
  const mutedColor = isDarkMode ? "#64748b" : "#94a3b8";
  const activeGradient = "linear-gradient(135deg, #7C2AE8 0%, #374FD9 75%, #0EC8FC 100%)";
  const inactiveBg = isDarkMode ? "#1e293b" : "#e2e8f0";
  const steps = ["Signup", "Verification", "Beta Access", "Forge"];

  const stepsHtml = steps
    .map(
      (step, index) => `
      <td align="center" width="${100 / steps.length}%" style="vertical-align: top;">
        <div style="width: 32px; height: 32px; border-radius: 50%; background: ${index <= currentStep ? activeGradient : inactiveBg}; margin: 0 auto 8px; line-height: 32px; text-align: center; color: ${index <= currentStep ? "#fff" : mutedColor}; font-family: Poppins, system-ui, sans-serif; font-weight: 600; font-size: 14px;">
          ${index + 1}
        </div>
        <span style="display: block; font-size: 12px; font-family: Inter, system-ui, sans-serif; color: ${index <= currentStep ? textColor : mutedColor}; font-weight: ${index === currentStep ? "600" : "400"};">
          ${step}
        </span>
      </td>
    `
    )
    .join("");

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
      <tr>
        <td>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>${stepsHtml}</tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}
