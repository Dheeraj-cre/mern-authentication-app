import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      error,
      style = {},
      ...rest
    },
    ref
  ) => {
    return (
      <div style={{ marginBottom: "15px" }}>
        {label && (
          <label style={{ fontWeight: "600" }}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...rest}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "6px",
            borderRadius: "4px",
            border: error ? "1px solid #dc2626" : "1px solid #cbd5f5",
            outline: "none",
            fontSize: "14px",
            ...style,
          }}
        />

        {error && (
          <p style={{ color: "#dc2626", fontSize: "12px", marginTop: "5px" }}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
