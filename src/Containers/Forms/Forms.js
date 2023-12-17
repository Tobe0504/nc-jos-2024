import { useParams } from "react-router-dom";
import FormLayout from "../../Components/FormLayout/FormLayout";
import Form1 from "../Form1/Form1";
import Form2 from "../Form2/Form2";
import Form3 from "../Form3/Form3";

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
      ) : undefined}
    </FormLayout>
  );
};

export default Forms;
