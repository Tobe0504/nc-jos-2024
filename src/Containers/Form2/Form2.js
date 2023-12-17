import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  // Router
  const navigate = useNavigate();

  return (
    <form className={classes.container}>
      <Input placeholder="KINGDOM" />
      <Input placeholder="NAME (BIRTHDAY) DAY" type="date" />
      <DropdownWithSearch
        title="RANK"
        options={["LCP", "LCVP", "TEAM LEADER", "EST"]}
      />
      <Input placeholder="DROP AN EMERGENCY CONTACT" />

      <Button
        onClick={() => {
          navigate("/registration/3");
        }}
      >
        NEXT
      </Button>
    </form>
  );
};

export default Form2;
