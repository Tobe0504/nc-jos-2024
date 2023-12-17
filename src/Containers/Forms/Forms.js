import { useParams } from "react-router-dom";
import FormLayout from "../../Components/FormLayout/FormLayout";
import Form1 from "../Form1/Form1";

const Forms = () => {
  // Router
  const { formStep } = useParams();
  return <FormLayout>{formStep === "1" ? <Form1 /> : undefined}</FormLayout>;
};

export default Forms;
