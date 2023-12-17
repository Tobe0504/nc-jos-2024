import FormLayout from "../../Components/FormLayout/FormLayout";
import Input from "../../Components/Input/Input";
import classes from "./Forms.module.css";

const Form1 = () => {
  return (
    <FormLayout>
      <form className={classes.container}>
        <Input placeholder="Moniker (how may we address you ?)" />
      </form>
    </FormLayout>
  );
};

export default Form1;
