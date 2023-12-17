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
      <DropdownWithSearch
        title="KINGDOM"
        options={[
          "ABEOKUTA",
          "ABUJA",
          "AKURE",
          "BENIN",
          "BENUE",
          "CALABAR",
          "ENUGU",
          "IBADAN",
          "IFE",
          "ILORIN",
          "JOS",
          "LAGOS",
          "PORT HARCOURT",
          "THE COOKS",
        ]}
      />
      <Input placeholder="NAME (BIRTHDAY) DAY" type="date" />
      <DropdownWithSearch
        title="RANK"
        options={["LCP", "LCVP", "TEAM LEADER", "EST"]}
      />
      <DropdownWithSearch
        title="IS THIS YOUR FIRST SUMMIT"
        options={["YES", "NO"]}
      />

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
