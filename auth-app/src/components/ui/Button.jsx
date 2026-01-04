function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  style = {},
}) {
  return (
    <button
      type={type}          // 🔥 THIS IS THE KEY
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.7 : 1,
        border: "none",
        borderRadius: "4px",
        background: "#2563eb",
        color: "#fff",
        fontWeight: "600",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
