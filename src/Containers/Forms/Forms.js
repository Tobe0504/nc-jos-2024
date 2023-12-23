import { Alert } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import FormLayout from "../../Components/FormLayout/FormLayout";
import { AppContext } from "../../Context/AppContext";
import { capitalize } from "../../HelperFunctions/capitalize";
import Form1 from "../Form1/Form1";
import Form2 from "../Form2/Form2";
import Form3 from "../Form3/Form3";
import Form4 from "../Form4/Form4";

const Forms = () => {
  // Router
  const { formStep } = useParams();

  // Context
  const { formSubmitRequest } = useContext(AppContext);

  return (
    <FormLayout>
      {formSubmitRequest?.error && (
        <div style={{ margin: "1rem 0 " }}>
          <Alert severity="error" variant="outlined">
            {capitalize(formSubmitRequest?.error)}
          </Alert>
        </div>
      )}
      {formStep === "1" ? (
        <Form1 />
      ) : formStep === "2" ? (
        <Form2 />
      ) : formStep === "3" ? (
        <Form3 />
      ) : formStep === "4" ? (
        <Form4 />
      ) : (
        <Form1 />
      )}
    </FormLayout>
  );
};

export default Forms;
