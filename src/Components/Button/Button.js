import classes from "./Button.module.css";

const Button = ({ children, type, disabled, onClick }) => {
  return (
    <button
      className={`${classes.button} ${
        type === "secondary"
          ? classes.secondary
          : type === "tertiary"
          ? classes.tertiary
          : type === "null"
          ? classes.null
          : type === "invalid"
          ? classes.invalid
          : type === "delete"
          ? classes.delete
          : type === "black"
          ? classes.black
          : type === "white"
          ? classes.white
          : classes.primary
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
