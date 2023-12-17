import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";
import { AppContext } from "../../Context/AppContext";

const Form4 = () => {
  // Router
  const navigate = useNavigate();

  // COntext
  const { formData, setFormData } = useContext(AppContext);

  // Utils
  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <form className={classes.container}>
      <Input
        placeholder="RELATIONSHIP WITH EMERGENCY CONTACT"
        value={formData.emergencyContactRelationship}
        onChange={inputChangeHandler}
        name="emergencyContactRelationship"
      />
      <Input
        placeholder="SUGGESTIONS / COMMENTS"
        value={formData.suggestions}
        onChange={inputChangeHandler}
        name="suggestions"
      />

      <Button
        onClick={() => {
          navigate("/registration-success");
        }}
      >
        REGISTER
      </Button>
    </form>
  );
};

export default Form4;
