import { CircularProgress } from "@mui/material";
import classes from "./Button.module.css";

const Button = ({ children, type, disabled, onClick, loading }) => {
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
      {loading ? <CircularProgress size="2rem" color="inherit" /> : children}
    </button>
  );
};

export default Button;
