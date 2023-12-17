import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  // Router
  const navigate = useNavigate();
  return (
    <section className={classes.container}>
      <h4>
        WELCOME TO <br />
        NATIONAL CONGRESS <br />
        JOS 24
      </h4>
      <Button
        onClick={() => {
          navigate("/registration/1");
        }}
      >
        Your Voyage Begins Here
      </Button>
    </section>
  );
};

export default LandingPage;
