import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      error,
      className = "",
      ...rest
    },
    ref
  ) => {
    return (
      <div className="input-group">
        {label && <label className="input-label">{label}</label>}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`input-field ${error ? "input-error" : ""} ${className}`}
          {...rest}
        />

        {error && <p className="input-error-text">{error}</p>}
      </div>
    );
  }
);

export default Input;
