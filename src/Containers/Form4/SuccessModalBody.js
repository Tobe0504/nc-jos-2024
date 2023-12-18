import Button from "../../Components/Button/Button";
import classes from "../Forms/Forms.module.css";
import ncSilver from "../../Assets/Images/nationalCongressSilver.png";

const SuccessModalBody = () => {
  return (
    <div className={classes.modalContainer}>
      <p>
        YOUR SEAT IN THE THRONE ROOM HAS BEEN SECURED. THE NORTH AWAITS YOUR
        PRESENCE
      </p>
      <img src={ncSilver} alt="NC" />

      <Button>CHECK YOUR MAIL FOR YOUR INVITE</Button>
    </div>
  );
};

export default SuccessModalBody;
