import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { AppContext } from "../../Context/AppContext";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  // Router
  const navigate = useNavigate();

  // COntext
  const { playAudio } = useContext(AppContext);

  return (
    <section className={classes.container}>
      <h4>
        <span>WELCOME</span> TO NATIONAL <br /> CONGRESS JOS<span>'24</span>
      </h4>
      <p>THE BEGINNING OF THE END</p>

      <Button
        onClick={() => {
          navigate("/registration/1");
          playAudio();
        }}
      >
        Your Voyage Begins Here
      </Button>
    </section>
  );
};

export default LandingPage;
