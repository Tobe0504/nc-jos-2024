import { useParams } from "react-router-dom";
import FormLayout from "../../Components/FormLayout/FormLayout";
import Form1 from "../Form1/Form1";
import Form2 from "../Form2/Form2";
import Form3 from "../Form3/Form3";
import Form4 from "../Form4/Form4";

const Forms = () => {
  // Router
  const { formStep } = useParams();
  return (
    <FormLayout>
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
