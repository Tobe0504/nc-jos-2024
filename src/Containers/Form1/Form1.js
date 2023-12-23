import { useContext, useState, useEffect } from "react";
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
  const { formData, setFormData } = useContext(AppContext);

  // States
  const [gender, setGender] = useState("");

  // Utils
  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // Effects
  useEffect(() => {
    if (gender) {
      setFormData((prevState) => {
        return { ...prevState, gender: gender };
      });
    }

    // eslint-disable-next-line
  }, [gender]);

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
        selected={gender}
        setSelected={setGender}
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
