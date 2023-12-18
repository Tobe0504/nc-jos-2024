import { useContext, useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";
import { AppContext } from "../../Context/AppContext";
import AcceptedModal from "../../Components/AcceptedModal/AcceptedModal";
import SuccessModalBody from "./SuccessModalBody";

const Form4 = () => {
  // Router

  // COntext
  const { formData, setFormData } = useContext(AppContext);

  // States
  const [displayModal, setDisplayModal] = useState(false);

  // Utils
  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <form className={classes.container}>
      {displayModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayModal(false);
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

          setDisplayModal(true);
        }}
      >
        REGISTER
      </Button>
    </form>
  );
};

export default Form4;
