import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import { AppContext } from "../../Context/AppContext";
import classes from "../Forms/Forms.module.css";

const Form1 = () => {
  // Router
  const navigate = useNavigate();

  // COntext
  const { formData, setFormData, genderState, setGenderState } =
    useContext(AppContext);

  // States

  // Utils
  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // Effects
  useEffect(() => {
    if (genderState) {
      setFormData((prevState) => {
        return { ...prevState, gender: genderState };
      });
    }

    // eslint-disable-next-line
  }, [genderState]);

  return (
    <form className={classes.container}>
      <Input
        placeholder="MONIKER (HOW MAY WE ADDRESS YOU ?)"
        value={formData.name}
        onChange={inputChangeHandler}
        name="name"
      />
      <Input
        placeholder="RAVEN (PHONE) COORDINATES"
        value={formData.ravenCoordinates}
        name="ravenCoordinates"
        onChange={inputChangeHandler}
      />
      <DropdownWithSearch
        title="GENDER"
        options={["LADY", "GENTLEMAN"]}
        selected={genderState}
        setSelected={setGenderState}
      />
      <Input
        placeholder="RAVEN (EMAIL) ADDRESS"
        value={formData.address}
        name="address"
        onChange={inputChangeHandler}
      />

      <Button
        onClick={() => {
          navigate("/registration/2");
        }}
      >
        NEXT
      </Button>
    </form>
  );
};

export default Form1;
