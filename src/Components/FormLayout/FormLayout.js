import classes from "./FormLayout.module.css";
import ncJosLogo from "../../Assets/Images/ncJosLogo.png";
import { useNavigate, useParams } from "react-router-dom";

const FormLayout = ({ children }) => {
  // Utils
  const steps = [1, 2, 3, 4];

  // Router
  const { formStep } = useParams();
  const navigate = useNavigate();

  return (
    <section className={classes.container}>
      <div className={classes.leftSection}>
        <img src={ncJosLogo} alt="NC Jos Logo" />
      </div>
      <div className={classes.rightSection}>
        <div className={classes.innerContainer}>
          {formStep !== "1" && (
            <div className={classes.previousNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <g style={{ mixBlendMode: "lighten" }}>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.4881 4.42993C15.5629 4.49406 15.6243 4.5723 15.6689 4.66019C15.7135 4.74808 15.7403 4.84389 15.7478 4.94215C15.7553 5.0404 15.7434 5.13918 15.7127 5.23283C15.6821 5.32647 15.6333 5.41316 15.5691 5.48793L9.98807 11.9999L15.5691 18.5119C15.6909 18.6638 15.749 18.857 15.731 19.0509C15.7129 19.2447 15.6202 19.424 15.4724 19.5507C15.3247 19.6775 15.1334 19.7418 14.939 19.7301C14.7447 19.7183 14.5625 19.6315 14.4311 19.4879L8.43107 12.4879C8.3146 12.352 8.25059 12.1789 8.25059 11.9999C8.25059 11.8209 8.3146 11.6479 8.43107 11.5119L14.4311 4.51193C14.5605 4.36112 14.7446 4.26787 14.9428 4.25268C15.141 4.23749 15.3371 4.30161 15.4881 4.43093V4.42993Z"
                    fill="#F3F2ED"
                  />
                </g>
              </svg>
              <span
                onClick={() => {
                  navigate(-1);
                }}
              >
                Back
              </span>
            </div>
          )}
          <h4>Get Registered</h4>
          <div className={classes.indicatorContainer}>
            {steps.map((data) => {
              console.log(data === Number(formStep));
              return (
                <div
                  key={data}
                  style={
                    Number(formStep) === data
                      ? { backgroundColor: "#C6AA58" }
                      : undefined
                  }
                ></div>
              );
            })}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default FormLayout;
