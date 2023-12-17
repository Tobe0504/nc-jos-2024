import Button from "../../Components/Button/Button";
import classes from "./RegistrationSuccess.module.css";

const RegistrationSuccess = () => {
  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>
          Your seat in the throne room has been secured. The north awaits your
          presence.{" "}
        </h4>

        <Button>DOWNLOAD TICKET</Button>
      </div>
    </section>
  );
};

export default RegistrationSuccess;
