import { useContext } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";
import { AppContext } from "../../Context/AppContext";
import AcceptedModal from "../../Components/AcceptedModal/AcceptedModal";
import SuccessModalBody from "./SuccessModalBody";

const Form4 = () => {
  // COntext
  const {
    formData,
    setFormData,
    register,
    setFormSubmitRequest,
    formSubmitRequest,
  } = useContext(AppContext);

  // Utils
  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <form className={classes.container}>
      {formSubmitRequest?.data && (
        <AcceptedModal
          onClick={() => {
            setFormSubmitRequest((prevState) => {
              return { ...prevState, data: null };
            });
          }}
          body={<SuccessModalBody />}
        />
      )}
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
        onClick={(e) => {
          e.preventDefault();
          register();
        }}
        loading={formSubmitRequest?.isLoading}
      >
        REGISTER
      </Button>
    </form>
  );
};

export default Form4;
