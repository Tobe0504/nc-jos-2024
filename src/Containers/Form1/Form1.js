import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";

const Form1 = () => {
  return (
    <form className={classes.container}>
      <Input placeholder="MONIKER (HOW MAY WE ADDRESS YOU ?)" />
      <Input placeholder="RAVEN COORDINATES" />
      <DropdownWithSearch
        title="GENDER"
        options={["LADY", "GENTLEMAN", "CAN I ABSTAIN"]}
      />
      <Input placeholder="RAVEN ADDRESS" />

      <Button>NEXT</Button>
    </form>
  );
};

export default Form1;
