import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";

const Form3 = () => {
  // Router
  const navigate = useNavigate();
  return (
    <form className={classes.container}>
      <DropdownWithSearch
        title="DO YOU HAVE ANY ALLERGIES"
        options={["YES", "NO"]}
      />
      <Input placeholder="WHAT'S THE TREATMENT FOR THE CONDITION" />
      <DropdownWithSearch
        title="CAN YOU STAY WITH THE OPPOSITE SEX"
        options={["YES", "NO"]}
      />
      <Input placeholder="DROP AN EMERGENCY CONTACT" />

      <Button
        onClick={() => {
          navigate("/registration/4");
        }}
      >
        NEXT
      </Button>
    </form>
  );
};

export default Form3;
