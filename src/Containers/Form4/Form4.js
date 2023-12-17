import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";

const Form4 = () => {
  // Router
  const navigate = useNavigate();
  return (
    <form className={classes.container}>
      <Input placeholder="RELATIONSHIP WITH EMERGENCY CONTACT" />
      <Input placeholder="SUGGESTIONS / COMMENTS" />

      <Button
        onClick={() => {
          navigate("/registration-success");
        }}
      >
        REGISTER
      </Button>
    </form>
  );
};

export default Form4;
