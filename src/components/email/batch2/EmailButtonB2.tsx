interface EmailButtonB2Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export function EmailButtonB2({ href, children, variant = "primary" }: EmailButtonB2Props) {
  const isPrimary = variant === "primary";

  return (
    <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
      <tbody>
        <tr>
          <td
            align="center"
            style={{
              background: isPrimary
                ? "linear-gradient(135deg, #7C2AE8 0%, #0EC8FC 100%)"
                : "transparent",
              borderRadius: "8px",
              border: isPrimary ? "none" : "2px solid #7C2AE8",
            }}
          >
            <a
              href={href}
              style={{
                display: "inline-block",
                padding: isPrimary ? "14px 36px" : "12px 34px",
                color: isPrimary ? "#ffffff" : "#7C2AE8",
                fontSize: "15px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: "600",
                textDecoration: "none",
                borderRadius: "8px",
                letterSpacing: "0.02em",
              }}
            >
              {children}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
