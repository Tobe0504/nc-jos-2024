import Button from "../../Components/Button/Button";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <section className={classes.container}>
      <h4>
        WELCOME TO <br />
        NATIONAL CONGRESS <br />
        JOS 24
      </h4>
      <Button>Your Voyage Begins Here</Button>
    </section>
  );
};

export default LandingPage;
