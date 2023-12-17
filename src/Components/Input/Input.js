import { useState } from "react";
import classes from "./Input.module.css";

const Input = ({
  type,
  label,
  onChange,
  onBlur,
  value,
  isRequired,
  errorMessage,
  inValidCondition,
  placeholder,
  tip,
  style,
  name,
  onFocus,
}) => {
  // States
  const [invalid, setInvalid] = useState(false);

  return (
    <div className={classes.container} style={style}>
      {label && (
        <>
          <label htmlFor="">{label}</label>
          {"  "}
          {isRequired && <span>*</span>}
        </>
      )}
      <input
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
        id={label}
        onChange={onChange}
        onBlur={(e) => {
          if (isRequired && e.target.value === "") {
            setInvalid(true);
          } else {
            setInvalid(false);
          }
          if (onBlur) onBlur();
        }}
        value={value}
        className={invalid ? classes.invalid : classes.valid}
      />
      {(invalid || inValidCondition) && (
        <span className={classes.errorMessage}>
          {errorMessage || "*invalid"}{" "}
        </span>
      )}
      {tip && <span className={classes.tip}>{tip}</span>}
    </div>
  );
};

export default Input;
