import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";

const Form3 = () => {
  // Router
  const navigate = useNavigate();

  // COntext
  const {
    formData,
    setFormData,
    allergiesState,
    setAllergiesState,
    oppositeSex,
    setOppositeSex,
  } = useContext(AppContext);

  // Utils
  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // Effects
  useEffect(() => {
    if (allergiesState) {
      setFormData((prevState) => {
        return { ...prevState, allergies: allergiesState };
      });
    }

    // eslint-disable-next-line
  }, [allergiesState]);

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
        selected={allergiesState}
        setSelected={setAllergiesState}
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
