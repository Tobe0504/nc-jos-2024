import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";

const Form3 = () => {
  // Router
  const navigate = useNavigate();

  // COntext
  const { formData, setFormData } = useContext(AppContext);

  // States
  const [allergies, setAllergies] = useState("");
  const [oppositeSex, setOppositeSex] = useState("");

  // Utils
  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // Effects
  useEffect(() => {
    if (allergies) {
      setFormData((prevState) => {
        return { ...prevState, allergies: allergies };
      });
    }

    // eslint-disable-next-line
  }, [allergies]);

  useEffect(() => {
    if (oppositeSex) {
      setFormData((prevState) => {
        return { ...prevState, oppositeSexCompatibility: oppositeSex };
      });
    }

    // eslint-disable-next-line
  }, [oppositeSex]);

  return (
    <form className={classes.container}>
      <DropdownWithSearch
        title="DO YOU HAVE ANY ALLERGIES"
        options={["YES", "NO"]}
        selected={allergies}
        setSelected={setAllergies}
      />
      <Input
        placeholder="WHAT'S THE TREATMENT FOR THE CONDITION"
        value={formData.allergyTreatment}
        onChange={inputChangeHandler}
        name="allergyTreatment"
      />
      <DropdownWithSearch
        title="CAN YOU STAY WITH THE OPPOSITE SEX"
        options={["YES", "NO"]}
        selected={oppositeSex}
        setSelected={setOppositeSex}
      />
      <Input
        placeholder="DROP AN EMERGENCY CONTACT"
        value={formData.emergencyContact}
        onChange={inputChangeHandler}
        name="emergencyContact"
      />

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
