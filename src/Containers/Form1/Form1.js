import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";

const Form1 = () => {
  return (
    <form className={classes.container}>
      <Input placeholder="Moniker (how may we address you ?)" />
      <Input placeholder="Raven coordinates" />
    </form>
  );
};

export default Form1;
